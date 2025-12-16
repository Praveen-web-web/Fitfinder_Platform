package com.backend.job.controller;

import com.backend.job.dto.request.JobCreateRequest;
import com.backend.job.dto.response.JobResponse;
import com.backend.job.service.JobService;
import com.backend.security.CustomUserDetails;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    @PreAuthorize("hasRole('COMPANY')")
    @PostMapping("/create")
    public JobResponse createJob(@Valid @RequestBody JobCreateRequest request,
            @AuthenticationPrincipal CustomUserDetails userDetails) {
        return jobService.createJob(request, userDetails.getUsername());
    }
    
    @GetMapping("/active")
    public List<JobResponse> getAllActiveJobs() {
        return jobService.getAllActiveJobs();
    }
}
