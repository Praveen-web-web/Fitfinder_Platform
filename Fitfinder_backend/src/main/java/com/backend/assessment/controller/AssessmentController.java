package com.backend.assessment.controller;

import org.springframework.web.bind.annotation.*;

import com.backend.assessment.dto.request.SubmitAnswerRequest;
import com.backend.assessment.dto.response.AssessmentResultResponse;
import com.backend.assessment.service.AssessmentService;
import jakarta.validation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/assessments")
@RequiredArgsConstructor
public class AssessmentController {

    private final AssessmentService assessmentService;

    public AssessmentResultResponse submitAnswer(@Valid @RequestBody SubmitAnswerRequest request) {
        return assessmentService.submitAnswer(request);
    }
}
