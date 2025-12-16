package com.backend.job.dto.request;

import java.time.LocalDateTime;

import com.backend.job.entity.EmploymentType;

import jakarta.validation.constraints.*;

import lombok.*;

@Getter
@Setter
public class JobCreateRequest {


    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String location;

    @NotNull
    private EmploymentType employmentType;

    @NotNull
    private Double salary;

    private String qualifications;

    private Boolean isActive;

    @NotBlank
    private LocalDateTime postedDate;
    @NotBlank
    private LocalDateTime applicationDeadline;

    @NotBlank
    private String skills;
    @NotBlank
    private String requirements;
    @NotNull
    private Integer numberOfPositions;
    @NotNull
    private Integer minExperience;
    @NotNull
    private Integer maxExperience;
}
