package com.backend.assessment.mapper;

import org.mapstruct.*;

import com.backend.assessment.dto.response.AssessmentResultResponse;
import com.backend.assessment.entity.Assessment;

@Mapper(componentModel = "spring")
public interface AssessmentMapper {

    @Mapping(source = "id", target = "assessmentId")
    AssessmentResultResponse toResultResponse(Assessment assessment);
}
