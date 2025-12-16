package com.backend.job.exception;

public class JobExpiredException extends RuntimeException {
    public JobExpiredException(String message) {
        super(message);
    }

}
