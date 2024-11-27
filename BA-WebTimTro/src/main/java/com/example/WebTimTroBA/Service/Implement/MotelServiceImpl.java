package com.example.WebTimTroBA.Service.Implement;

import com.example.WebTimTroBA.Converter.MotelResponseConverter;
import com.example.WebTimTroBA.CustomException.NotFoundException;
import com.example.WebTimTroBA.Model.ApiDistance.Distance;
import com.example.WebTimTroBA.Model.ApiDistance.Leg;
import com.example.WebTimTroBA.Model.ApiDistance.RouterResponse;
import com.example.WebTimTroBA.Model.DTO.MotelDTO;
import com.example.WebTimTroBA.Model.Entity.FileEntity;
import com.example.WebTimTroBA.Model.Entity.MotelEntity;
import com.example.WebTimTroBA.Model.Entity.UserEntity;
import com.example.WebTimTroBA.Repository.MotelRepository;
import com.example.WebTimTroBA.Model.Response.MotelResponse;
import com.example.WebTimTroBA.Model.Search.MotelSearchBuilder;
import com.example.WebTimTroBA.Service.CloudinaryService;
import com.example.WebTimTroBA.Service.MotelService;
import com.example.WebTimTroBA.Service.UserService;
import com.example.WebTimTroBA.Utils.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;


import java.io.IOException;
import java.net.MalformedURLException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MotelServiceImpl implements MotelService {
    private final MotelRepository motelRepository;
    private final MotelResponseConverter motelResponseConverter;
    private final ModelMapper modelMapper;
    private final CloudinaryService cloudinaryService;
    private final UserService userService;
    private final JwtTokenUtils jwtTokenUtils;

    @Override
    public List<MotelResponse> findByParam(MotelSearchBuilder motelSearchBuilder) throws MalformedURLException {
        List<MotelEntity> motelEntities = motelRepository.searchByMotelSearchBuilder(motelSearchBuilder);
        return motelResponseConverter.toMotelResponse(motelEntities);
    }

    @Override
    public void save(MotelDTO motelDTO, String token) throws IOException {
        Integer id = jwtTokenUtils.extractUserId(token);
        Optional<UserEntity> userEntityOptional = userService.findById(id);
        if(userEntityOptional.isEmpty()) throw new NotFoundException("User not found");
        if(!jwtTokenUtils.isTokenUserNameValid(token, userEntityOptional.get().getUsername())){
            throw new NotFoundException("Unauthorized");
        }
        MotelEntity motelEntity = modelMapper.map(motelDTO, MotelEntity.class);
        motelEntity.setUserId(id);
        motelEntity.setUser(userEntityOptional.get());
        motelRepository.save(motelEntity);

        List<MultipartFile> files = motelDTO.getFiles();
        for(MultipartFile file : files){
            Map result = cloudinaryService.uploadFile(file);
            FileEntity fileEntity = FileEntity
                    .builder()
                    .name(result.get("original_filename").toString())
                    .fileUrl(result.get("url").toString())
                    .fileId(result.get("public_id").toString())
                    .motelId(motelEntity.getId())
                    .motelEntity(motelEntity)
                    .build();
            motelEntity.getFileEntities().add(fileEntity);
        }
        motelRepository.save(motelEntity);
    }

    @Override
    public List<MotelResponse> findAll() throws MalformedURLException {
//        List<MotelEntity> motelEntities = motelRepository.findAll(Sort.by("created_at").descending().and(Sort.by("updated_at").descending().and(Sort.by("status").ascending())));

        return motelResponseConverter.toMotelResponseApproved(motelRepository.findAll());
    }

    @Override
    public void markById(Integer Id) {
        MotelEntity motelEntity = motelRepository.findById(Id).get();
        motelEntity.setStatus(1-motelEntity.getStatus());
        motelRepository.save(motelEntity);
    }

    @Override
    public List<MotelResponse> findAndPagination(Integer page) throws MalformedURLException {
        Page<MotelEntity> motelResponses = motelRepository.findAll(PageRequest.of(page-1, 4, Sort.by("created_at").descending().and(Sort.by("updated_at").descending().and(Sort.by("status").ascending()))));
        return motelResponseConverter.toMotelResponse(motelResponses.getContent());
    }

    @Override
    public List<MotelResponse> findByUserName(String name) throws MalformedURLException {
        Optional<UserEntity> user = userService.findByUserName(name);
        if(user.isEmpty()) throw new NotFoundException("User not found");
        Optional<List<MotelEntity>> motelEntities = motelRepository.findByUserId(user.get().getId());
        if(motelEntities.isEmpty()) throw new NotFoundException("Empty");
        return motelResponseConverter.toMotelResponse(motelEntities.get());
    }

    @Override
    public void deleteById(Integer Id) {
        motelRepository.deleteById(Id);
    }

    @Override
    public MotelResponse getById(Integer Id) {
        return motelResponseConverter.toMotelResponse(motelRepository.findById(Id).get());
    }

    @Override
    public void editById(Integer Id, MotelDTO motelDTO) {
        if (Objects.equals(Id, motelDTO.getUserId())) {
            MotelEntity motelEntity = motelRepository.findById(motelDTO.getId()).get();
            modelMapper.map(motelDTO, motelEntity);

            motelRepository.save(motelEntity);
        } else {
            throw new NotFoundException("Ban khong co quyen");
        }
    }

    @Override
    public List<MotelResponse> getMotelsByUserId(Integer Id) {
        Optional<List<MotelEntity>> motelEntities = motelRepository.findByUserId(Id);
        List<MotelResponse> result = new ArrayList<>();
        for(MotelEntity motelEntity : motelEntities.get()){
            result.add(motelResponseConverter.toMotelResponse(motelEntity));
        }

        return result;
    }

    @Override
    public void review(List<Integer> ids, Integer status) {
        if(status == 1){ // xóa
            for(Integer id : ids){
                MotelEntity motelEntity = motelRepository.findById(id).get();
                motelEntity.setUserId(null);
                UserEntity user = motelEntity.getUser();
                user.getMotelEntities().remove(motelEntity);
            }
            motelRepository.deleteByIdIn(ids);
        }
        else if(status == 2){ // gỡ bài
            for(Integer id : ids){
                MotelEntity motelEntity = motelRepository.findById(id).get();
                motelEntity.setStatus(0);
            }
        }
        else{
            for(Integer id : ids){
                MotelEntity motelEntity = motelRepository.findById(id).get();
                motelEntity.setStatus(1);
            }
        }
    }

    @Override
    public List<MotelResponse> getByRadius(String destination, Double radius) throws MalformedURLException {
        List<MotelResponse> motelResponses = getApprovedMotels();
        List<MotelResponse> result = new ArrayList<>();

        for(MotelResponse motelResponse: motelResponses) {
            String url = String.format(
                    "https://maps.gomaps.pro/maps/api/directions/json?origin=%s&destination=%s&key=AlzaSyPy5W8ze98SLVMJo2HDIjyT2O2adH9Dw1U",
                    destination,
                    motelResponse.getAddress()
            );

            WebClient.Builder builder = WebClient.builder();
            List<Distance> list = builder.build()
                    .get()
                    .uri(url)
                    .header("Accept", "application/json")
                    .retrieve()
                    .bodyToMono(RouterResponse.class)
                    .map(response -> response.getRoutes().stream()
                            .flatMap(route -> route.getLegs().stream())
                            .map(Leg::getDistance)
                            .collect(Collectors.toList()))
                    .block();


            assert list != null;
            if(!list.isEmpty() && radius >= list.getFirst().getValue()){
                motelResponse.setDistance(list.getFirst().getText());
                motelResponse.setDistanceValue(list.getFirst().getValue());
                result.add(motelResponse);
            }
        }
        result.sort(Comparator.comparing(MotelResponse::getDistanceValue));
        return result;
    }

    @Override
    public List<MotelResponse> getApprovedMotels() throws MalformedURLException {
        List<MotelEntity> motelEntities = motelRepository.findAll();
        return motelResponseConverter.toMotelResponse(motelEntities);
    }
}
