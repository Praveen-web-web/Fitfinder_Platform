package com.backend.report.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.backend.report.dto.CandidateReportResponse;
import com.backend.report.service.ReportService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;


    @GetMapping("/company/{companyId}")
    public List<CandidateReportResponse> getCompanyReports(@PathVariable Long companyId) {
        return reportService.getReportsByCompany(companyId);
    }

    @GetMapping("/candidate/{assessmentId}")
    public CandidateReportResponse getCandidateReport(@PathVariable long assessmentId) {
        return reportService.getCandidateReport(assessmentId);
    }
}
