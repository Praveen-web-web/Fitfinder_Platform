package com.backend.report.service.serviceImpl;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.backend.assessment.repository.*;
import com.backend.assessment.entity.*;
import com.backend.report.dto.CandidateReportResponse;
import com.backend.report.service.ReportService;
import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final AssessmentRepository assessmentRepository;

    @Override
    public List<CandidateReportResponse> getReportsByCompany(Long companyId) {
        return assessmentRepository.findById(companyId).stream().map(this::buildReport).collect(Collectors.toList());
    }

    @Override
    public CandidateReportResponse getCandidateReport(Long assessmentId) {
        Assessment assessment = assessmentRepository.findById(assessmentId)
                .orElseThrow(() -> new RuntimeException("Assessment not found"));
        return buildReport(assessment);
    }
    
    private CandidateReportResponse buildReport(Assessment assessment) {
        var user = assessment.getCandidateId();
        var job = assessment.getJobId();
        var company = job.getCompany();
        int totalScore = (assessment.getMcqScore() == null ? 0 : assessment.getMcqScore()) + (assessment.getCodingScore() == null ? 0 : assessment.getCodingScore());

        return CandidateReportResponse.builder().candidateId(user.getId()).candidateName(user.getFullname())
                .email(user.getEmail()).jobTitle(job.getTitle()).companyName(company.getCompanyName())
                .mcqScore(assessment.getMcqScore()).codingScore(assessment.getCodingScore()).totalScore(totalScore)
                .assessmentStatus(assessment.getStatus()).build();
    }
}
