package com.backend.assessment.dto.response;

import lombok.*;

@Getter@Builder
public class AssessmentResultResponse {

    private Long assessmentId;
    private Integer score;
    private String status;
}
