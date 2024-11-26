package com.example.WebTimTroBA.Model.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder

public class UserDTO {
    private String fullName;

    private String email;

    private String phoneNumber;

    private String userName;

    private String password;

    private String retypePassword;

}
