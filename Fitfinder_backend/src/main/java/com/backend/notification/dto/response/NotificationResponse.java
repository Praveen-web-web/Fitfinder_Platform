package com.backend.notification.dto.response;

import com.backend.common.enums.NotificationType;
import lombok.*;

@Getter@Builder
public class NotificationResponse {

    private long id;
    private Long recipientId;
    private String recipientType;
    private NotificationType type;
    private String message;
    private Boolean isRead;
}
