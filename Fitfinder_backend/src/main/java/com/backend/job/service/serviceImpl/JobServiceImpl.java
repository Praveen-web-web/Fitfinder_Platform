package com.backend.job.service.serviceImpl;

import com.backend.job.repository.JobRepository;
import com.backend.job.mapper.JobMapper;
import com.backend.company.repository.CompanyRepository;
import com.backend.job.service.JobService;
import com.backend.job.dto.request.JobCreateRequest;
import com.backend.job.dto.response.JobResponse;
import com.backend.company.entity.Company;
import com.backend.job.entity.Job;
import com.backend.job.exception.*;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;
    private final JobMapper jobMapper;
    private final CompanyRepository companyRepository;

    @Override
    public JobResponse createJob(JobCreateRequest request, String companyEmail) {
        Company company = companyRepository.findByEmail(companyEmail)
                .orElseThrow(() -> new UnauthorizedJobAccessException("Company not authorized to create job."));

        Job job = jobMapper.toEntity(request);
        job.setCompany(company);
        job.setPostedDate(LocalDateTime.now());
        job.setIsActive(Boolean.TRUE.equals(request.getIsActive()) ? request.getIsActive() : true);

        return jobMapper.toResponse(jobRepository.save(job));
    }

    @Override
    public List<JobResponse> getAllActiveJobs() {
        List<Job> jobs = jobRepository.findByIsActiveTrue();
        
        if(jobs.isEmpty()) {
            throw new NoActiveJobsFoundException("No active jobs found.");
        }

        return jobs.stream().map(jobMapper::toResponse).collect(Collectors.toList());

    }

    @Override
    public List<JobResponse> getActiveJobsByCompany(Long companyId) {
        List<Job> jobs = jobRepository.findByCompanyIdAndIsActiveTrue(companyId);

        if (((JobCreateRequest) jobs).getApplicationDeadline().isBefore(LocalDateTime.now())) {
            throw new JobExpiredException("The jobs for the specified company have expired.");

        }//Check this condition
        
        if(jobs.isEmpty()) {
            throw new JobExpiredException("No active jobs found for the specified company.");
        }

        return jobs.stream()
                .map(jobMapper::toResponse)
                .collect(Collectors.toList());
    }
}
