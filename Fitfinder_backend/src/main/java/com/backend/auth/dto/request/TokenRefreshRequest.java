package com.backend.auth.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter@Setter
public class TokenRefreshRequest {

    @NotBlank
    private String refreshToken;
}
