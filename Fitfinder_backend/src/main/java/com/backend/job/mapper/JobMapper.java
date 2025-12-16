package com.backend.job.mapper;

import com.backend.job.dto.request.JobCreateRequest;
import com.backend.job.dto.response.JobResponse;
import com.backend.job.entity.Job;

import org.mapstruct.*;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface JobMapper {

    @Mapping(target = "company", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "isActive", ignore = true)
    @Mapping(target = "postedDate", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Job toEntity(JobCreateRequest request);

    @Mapping(target = "companyName", source = "company.companyName")
    @Mapping(target = "employmentType", source = "employmentType")
    JobResponse toResponse(Job job);

    default Set<String> map(String value) {
        if (value == null) {
            return null;
        }
        return Arrays.stream(value.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toSet());
    }
}
