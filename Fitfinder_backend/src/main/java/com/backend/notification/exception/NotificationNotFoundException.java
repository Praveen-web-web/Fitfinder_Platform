package com.backend.notification.exception;

public class NotificationNotFoundException extends RuntimeException {

    public NotificationNotFoundException(String msg) {
        super(msg);
    }
}
