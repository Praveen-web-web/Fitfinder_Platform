package com.backend.user.controller;

import org.springframework.security.core.*;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.*;
import com.backend.user.dto.request.UserProfileUpdateRequest;
import com.backend.user.dto.response.UserProfileResponse;
import com.backend.user.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public UserProfileResponse getMyprofile(Authentication authentication) {
        return userService.getProfile(authentication.getName());
    }

    @PutMapping("/me")
    public UserProfileResponse updateProfile(Authentication authentication,
            @Valid @RequestBody UserProfileUpdateRequest request) {
        return userService.updateProfile(authentication.getName(), request);
    }
}
