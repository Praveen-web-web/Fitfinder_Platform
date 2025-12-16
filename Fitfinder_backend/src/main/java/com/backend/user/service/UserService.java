package com.backend.user.service;

import com.backend.user.dto.request.UserProfileUpdateRequest;
import com.backend.user.dto.response.UserProfileResponse;

public interface UserService {

    UserProfileResponse getProfile(String email);

    UserProfileResponse updateProfile(String email, UserProfileUpdateRequest request);
}
