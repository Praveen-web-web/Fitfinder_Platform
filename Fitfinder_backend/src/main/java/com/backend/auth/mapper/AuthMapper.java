package com.backend.auth.mapper;

import com.backend.auth.entity.Account;
import com.backend.auth.dto.request.RegisterRequest;
import com.backend.common.enums.Role;

import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface AuthMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "role", expression  = "java(role)")
    @Mapping(target = "enabled", constant = "true")
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Account toEntity(RegisterRequest request, Role role);
}
