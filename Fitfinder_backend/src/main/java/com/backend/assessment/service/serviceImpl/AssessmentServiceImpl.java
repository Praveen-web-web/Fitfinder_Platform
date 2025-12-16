package com.backend.assessment.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.backend.assessment.dto.request.SubmitAnswerRequest;
import com.backend.assessment.dto.response.AssessmentResultResponse;
import com.backend.assessment.entity.*;
import com.backend.assessment.exception.*;

import com.backend.assessment.mapper.AssessmentMapper;
import com.backend.assessment.repository.*;

import com.backend.assessment.service.AssessmentService;
import com.backend.common.enums.AssessmentStatus;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AssessmentServiceImpl implements AssessmentService {

    private final AssessmentRepository assessmnetRepository;
    private final QuestionRepository questionRepository;
    private final AssessmentMapper mapper;

    @Override
    public AssessmentResultResponse submitAnswer(SubmitAnswerRequest request) {
        Assessment assessment = assessmnetRepository.findById(request.getAssessmentId())
                .orElseThrow(() -> new AssessmentNotFoundException("Assessment not found"));

        if (assessment.getStatus() == AssessmentStatus.SUBMITTED) {
            throw new AssessmentClosedException("Assessment already submitted");
        }
        
        Question question = questionRepository.findById(request.getQuestionId())
                .orElseThrow(() -> new QuestionNotFoundException("Question not found"));

        boolean correct = question.getCorrectOption().equalsIgnoreCase(request.getSelectedOption());
        
        Answer answer = Answer.builder().questionId(question.getId()).selectedOption(request.getSelectedOption())
                .correct(correct).assessment(assessment).build();

        assessment.getAnswers().add(answer);

        int score = assessment.getScore() == null ? 0 : assessment.getScore();
        if (correct)
            score++;

        assessment.setScore(score);
        assessmnetRepository.save(assessment);

        return mapper.toResultResponse(assessment);
    }
}
