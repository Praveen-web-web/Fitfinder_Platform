package com.backend.auth.service;

import com.backend.auth.dto.request.LoginRequest;
import com.backend.auth.dto.request.RegisterRequest;
import com.backend.auth.dto.response.AuthResponse;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

    AuthResponse refreshToken(String refreshToken);
}
