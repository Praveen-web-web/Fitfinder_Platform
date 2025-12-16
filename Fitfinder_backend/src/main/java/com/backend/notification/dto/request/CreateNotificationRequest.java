package com.backend.notification.dto.request;

import lombok.*;

import com.backend.common.enums.NotificationType;

import jakarta.validation.constraints.*;

@Getter
@Setter
public class CreateNotificationRequest {

    @NotNull
    private long recipientId;

    @NotBlank
    private String recipientType;

    @NotNull
    private NotificationType type;

    @NotBlank
    private String message;
}
