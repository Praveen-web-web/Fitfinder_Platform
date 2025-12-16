package com.backend.notification.controller;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import com.backend.notification.dto.request.CreateNotificationRequest;
import com.backend.notification.dto.response.NotificationResponse;
import com.backend.notification.service.NotificationService;

import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService service;

    @PostMapping
    public NotificationResponse create(@Valid @RequestBody CreateNotificationRequest request) {
        return service.create(request);
    }

    @GetMapping
    public List<NotificationResponse> getUserNotification(@RequestParam Long recipientId,
            @RequestParam String recipientType) {
        return service.getUserNotification(recipientId, recipientType);
    }

    @PatchMapping("/{id}/read")
    public void markAsRead(@PathVariable Long id) {
        service.markAsRead(id);
    }
}
