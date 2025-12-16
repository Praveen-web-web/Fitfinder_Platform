package com.backend.job.exception;

public class UnauthorizedJobAccessException extends RuntimeException {
    public UnauthorizedJobAccessException(String message) {
        super(message);
    }

}
