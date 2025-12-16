package com.backend.notification.service;

import com.backend.notification.dto.request.CreateNotificationRequest;
import com.backend.notification.dto.response.*;
import java.util.List;

public interface NotificationService {

    NotificationResponse create(CreateNotificationRequest request);

    List<NotificationResponse> getUserNotification(Long recipientId, String recipientType);

    void markAsRead(Long notificationId);

}
