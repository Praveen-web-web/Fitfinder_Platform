package com.backend.notification.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.backend.notification.dto.request.CreateNotificationRequest;
import com.backend.notification.dto.response.NotificationResponse;
import com.backend.notification.mapper.NotificationMapper;
import com.backend.notification.repository.NotificationRepository;
import com.backend.notification.service.NotificationService;
import com.backend.notification.entity.*;
import com.backend.notification.exception.NotificationNotFoundException;

import java.util.List;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;
    private final NotificationMapper mapper;

    @Override
    public NotificationResponse create(CreateNotificationRequest request) {
        Notification notification = mapper.toEntity(request);
        Notification saved = notificationRepository.save(notification);

        return mapper.toResponse(saved);
    }

    @Override
    public List<NotificationResponse> getUserNotification(Long recipientId, String recipientType) {
        return notificationRepository.findByRecipientIdAndRecipientType(recipientId, recipientType).stream()
                .map(mapper::toResponse).toList();
    }

    @Override
    public void markAsRead(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new NotificationNotFoundException("Notification not found"));
        notification.setIsRead(true);
        notificationRepository.save(notification);        
    }
}
