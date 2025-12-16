package com.backend.user.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
public class UserProfileUpdateRequest {

    @NotBlank
    private String fullName;

    @NotBlank
    private String phone;
}
