package com.backend.auth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import com.backend.auth.dto.request.RegisterRequest;
import com.backend.auth.dto.request.TokenRefreshRequest;
import com.backend.auth.dto.response.AuthResponse;
import com.backend.auth.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import com.backend.auth.dto.request.LoginRequest;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/refresh")
    public AuthResponse refresh(@RequestBody TokenRefreshRequest request) {
        return authService.refreshToken(request.getRefreshToken());
    }
}
