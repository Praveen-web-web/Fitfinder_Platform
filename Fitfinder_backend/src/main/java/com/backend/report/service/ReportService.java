package com.backend.report.service;

import java.util.List;

import com.backend.report.dto.CandidateReportResponse;

public interface ReportService {

    List<CandidateReportResponse> getReportsByCompany(Long companyId);

    CandidateReportResponse getCandidateReport(Long assessmentId);
}
