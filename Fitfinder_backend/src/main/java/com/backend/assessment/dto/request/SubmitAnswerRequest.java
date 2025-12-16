package com.backend.assessment.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter@Setter
public class SubmitAnswerRequest {

    @NotNull
    private Long assessmentId;

    @NotNull
    private Long questionId;
    
    @NotNull
    private String selectedOption;
}
