package com.backend.notification.mapper;

import org.mapstruct.*;
import com.backend.notification.entity.*;
import com.backend.notification.dto.request.CreateNotificationRequest;
import com.backend.notification.dto.response.NotificationResponse;

@Mapper(componentModel = "spring")
public interface NotificationMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "isRead", constant = "false")
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Notification toEntity(CreateNotificationRequest request);

    NotificationResponse toResponse(Notification notification);

}
