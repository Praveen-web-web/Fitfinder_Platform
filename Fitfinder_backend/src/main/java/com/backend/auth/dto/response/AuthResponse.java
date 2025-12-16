package com.backend.auth.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthResponse {

    private String token;
    private String role;
    private String email;
    private String refreshToken;
    private long expiresIn;
}
