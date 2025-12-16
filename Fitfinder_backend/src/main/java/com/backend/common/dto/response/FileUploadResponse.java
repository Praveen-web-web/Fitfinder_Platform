package com.backend.common.dto.response;

import lombok.*;

@Getter@Builder
public class FileUploadResponse {

    private Long fileId;
    private String fileName;
    private String downloadUrl;
}
