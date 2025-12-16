package com.backend.company.mapper;

import com.backend.auth.entity.Account;
import com.backend.company.dto.request.CompanyRegisterRequest;
import com.backend.company.dto.response.CompanyProfileResponse;
import com.backend.company.entity.Company;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface CompanyMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "approved", constant = "false")
    @Mapping(target = "account", source = "account")
    Company toEntity(CompanyRegisterRequest request, Account account);


    @Mapping(source = "account.role", target = "role")
    @Mapping(source = "account.email", target = "companyEmail")
    @Mapping(target = "token", ignore = true)
    CompanyProfileResponse toResponse(Company company);
}
