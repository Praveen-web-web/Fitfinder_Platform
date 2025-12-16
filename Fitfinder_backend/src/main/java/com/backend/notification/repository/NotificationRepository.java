package com.backend.notification.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.notification.entity.Notification;
import java.util.List;


public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findByRecipientIdAndRecipientType(Long recipientId, String recipientType);
}
