package com.backend.assessment.exception;

public class QuestionNotFoundException extends RuntimeException {

    public QuestionNotFoundException(String msg) {
        super(msg);
    }
}
