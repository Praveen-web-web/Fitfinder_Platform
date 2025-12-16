package com.backend.common.service;

import com.backend.common.dto.response.FileUploadResponse;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;;

public interface FileService {

    FileUploadResponse upload(MultipartFile file, String ownerType, Long ownerId) throws IOException;

    Resource download(Long fileId);

    void delete(Long fileId);

    List<FileUploadResponse> getFilesByOwner(String ownerType, long ownerId);
}
