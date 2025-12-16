package com.backend.company.service;

import com.backend.company.dto.request.CompanyRegisterRequest;
import com.backend.company.dto.response.CompanyProfileResponse;


public interface CompanyService {

    CompanyProfileResponse registerCompany(CompanyRegisterRequest request, String loogedInEmail);

    CompanyProfileResponse getMyProfile(String loggedInEmail);
}
