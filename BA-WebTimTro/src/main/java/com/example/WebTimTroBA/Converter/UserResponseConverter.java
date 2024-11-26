package com.example.WebTimTroBA.Converter;

import com.example.WebTimTroBA.Model.Entity.UserEntity;
import com.example.WebTimTroBA.Model.Response.UserResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class UserResponseConverter {
    @Autowired
    private ModelMapper modelMapper;

    public List<UserResponse> toUserResponse(List<UserEntity> list){
        List<UserResponse> result = new ArrayList<>();
        for(UserEntity user : list){
            UserResponse userResponse = modelMapper.map(user, UserResponse.class);
            userResponse.setRole(user.getRoleEntity().getRole());
            result.add(userResponse);
        }
        return result;
    }
    public UserResponse toUserResponse(UserEntity userEntity){
        UserResponse userResponse = modelMapper.map(userEntity, UserResponse.class);
        userResponse.setRole(userEntity.getRoleEntity().getRole());
        return userResponse;
    }
}
