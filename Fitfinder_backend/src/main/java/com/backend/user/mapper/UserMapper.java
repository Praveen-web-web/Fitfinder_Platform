package com.backend.user.mapper;

import org.mapstruct.*;
import com.backend.user.entity.*;
import java.util.Set;
import java.util.stream.Collectors;

import com.backend.user.dto.request.UserProfileUpdateRequest;
import com.backend.user.dto.response.UserProfileResponse;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "skills", expression = "java(mapSkills(user.getSkills()))")
    @Mapping(target = "fullName", source = "fullname")
    UserProfileResponse toResponse(User user);

    default Set<String> mapSkills(Set<Skill> skills) {
        if (skills == null) {
            return null;
        }
        return skills.stream().map(Skill::getName).collect(Collectors.toSet());
    }

    @Mapping(target = "email", ignore = true)
    @Mapping(target = "fullname", source = "fullName")
    @Mapping(target = "phone", source = "phone")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "resume", ignore = true)
    @Mapping(target = "skills", ignore = true)
    void updateUserFromRequest(UserProfileUpdateRequest request, @MappingTarget User user);

}
