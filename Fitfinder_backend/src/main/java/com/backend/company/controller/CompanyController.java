package com.backend.company.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import com.backend.company.dto.request.CompanyRegisterRequest;
import com.backend.company.dto.response.CompanyProfileResponse;
import com.backend.company.service.CompanyService;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @PostMapping("/register")
    public CompanyProfileResponse register(@Valid @RequestBody CompanyRegisterRequest request,
            Authentication authentication) {
        return companyService.registerCompany(request, authentication.getName());
    }
    
    @GetMapping("/me")
    public CompanyProfileResponse getMyProfile(Authentication authentication) {
        return companyService.getMyProfile(authentication.getName());
    }
}
