package com.backend.job.service;

import com.backend.job.dto.response.JobResponse;

import java.util.List;

import com.backend.job.dto.request.JobCreateRequest;


public interface JobService {

    JobResponse createJob(JobCreateRequest request, String companyEmail);

    List<JobResponse> getAllActiveJobs();

    List<JobResponse> getActiveJobsByCompany(Long companyId);
}
