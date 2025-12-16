package com.backend.assessment.exception;


public class AssessmentNotFoundException extends RuntimeException {

    public AssessmentNotFoundException(String msg) {
        super(msg);
    }
}
