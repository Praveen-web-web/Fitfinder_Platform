package com.backend.common.dto.request;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotNull;

@Getter
@Setter
public class FileUploadRequest {

    @NotNull
    private MultipartFile file;

    @NotNull
    private String ownerType;

    @NotNull
    private Long ownerId;
}
