package com.example.WebTimTroBA.Converter;

import com.example.WebTimTroBA.Model.Entity.UserEntity;
import com.example.WebTimTroBA.Model.Response.OwnerResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OwnerResponseConverter {
    public OwnerResponse toOwnerResponse(UserEntity userEntity) {
        OwnerResponse ownerResponse = new OwnerResponse();
        ownerResponse.setId(userEntity.getId());
        ownerResponse.setFullName(userEntity.getFullName());
        ownerResponse.setPhone(userEntity.getPhoneNumber());
        return ownerResponse;
    }
}
