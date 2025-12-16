package com.backend.user.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.backend.user.dto.request.UserProfileUpdateRequest;
import com.backend.user.dto.response.UserProfileResponse;
import com.backend.user.exception.UserNotFoundException;
import com.backend.user.mapper.UserMapper;
import com.backend.user.repository.UserRepository;
import com.backend.user.service.UserService;
import com.backend.user.entity.*;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final UserMapper mapper;

    @Override
    public UserProfileResponse getProfile(String email) {

        User user = repository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));
        return mapper.toResponse(user);        
    }
    
    @Override
    public UserProfileResponse updateProfile(String email, UserProfileUpdateRequest request) {
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));

        // mapper.updateUserFromRequest(request, user);        
        
        user.setFullname(request.getFullName());
        user.setPhone(request.getPhone());
        
        User update = repository.save(user);

        return mapper.toResponse(update);
        
    }
}
