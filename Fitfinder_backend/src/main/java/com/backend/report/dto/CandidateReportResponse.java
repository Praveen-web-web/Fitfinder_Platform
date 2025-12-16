package com.backend.report.dto;

import com.backend.common.enums.AssessmentStatus;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CandidateReportResponse {

    private Long candidateId;
    private String candidateName;
    private String email;

    private String jobTitle;
    private String companyName;

    private Integer mcqScore;
    private Integer codingScore;
    private Integer totalScore;

    private AssessmentStatus assessmentStatus;
}
