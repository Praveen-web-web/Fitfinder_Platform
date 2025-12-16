package com.backend.job.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
public class JobResponse {

    private Long id;
    private String title;
    private String location;
    private String employmentType;
    private Double salary;
    private Boolean isActive;
    private String companyName;
    
}
