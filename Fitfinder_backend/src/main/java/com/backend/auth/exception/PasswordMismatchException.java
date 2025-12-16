package com.backend.auth.exception;


public class PasswordMismatchException extends AuthException {
    public PasswordMismatchException(String message) {
        super(message);
    }

}
