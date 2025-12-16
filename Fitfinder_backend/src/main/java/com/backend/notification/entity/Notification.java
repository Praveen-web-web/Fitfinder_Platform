package com.backend.notification.entity;

import com.backend.common.entity.BaseEntity;
import com.backend.common.enums.NotificationType;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "notifications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Notification extends BaseEntity {

    @Column(nullable = false)
    private Long recipientId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String recipientType;

    @Column(nullable = false,length = 500)
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NotificationType type;

    private String recipientEmail;

    @Column(nullable = false)
    private Boolean isRead;

}
