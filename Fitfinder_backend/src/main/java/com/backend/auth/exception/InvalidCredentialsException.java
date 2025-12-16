package com.backend.auth.exception;

public class InvalidCredentialsException extends AuthException {
    public InvalidCredentialsException(String message) {
        super(message);
    }
}
