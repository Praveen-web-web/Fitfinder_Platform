package com.backend.job.exception;

public class NoActiveJobsFoundException extends RuntimeException {
    public NoActiveJobsFoundException(String message) {
        super(message);
    }

}
