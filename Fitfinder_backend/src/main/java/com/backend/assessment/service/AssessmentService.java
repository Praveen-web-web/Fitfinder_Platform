package com.backend.assessment.service;

import com.backend.assessment.dto.request.SubmitAnswerRequest;
import com.backend.assessment.dto.response.AssessmentResultResponse;

public interface AssessmentService {

    AssessmentResultResponse submitAnswer(SubmitAnswerRequest request);
}
