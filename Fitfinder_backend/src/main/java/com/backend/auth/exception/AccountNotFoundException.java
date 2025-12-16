package com.backend.auth.exception;

public class AccountNotFoundException extends AuthException {
    public AccountNotFoundException(String message) {
        super(message);
    }
}
