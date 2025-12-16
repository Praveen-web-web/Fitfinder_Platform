package com.backend.common.mapper;

import org.mapstruct.*;

import com.backend.common.dto.response.FileUploadResponse;
import com.backend.common.entity.FileMetadata;

@Mapper(componentModel = "spring")
public interface FileMapper {
    
    @Mapping(target = "fileId", source = "id")
    @Mapping(target = "fileName", source = "originalFileName")
    @Mapping(target = "downloadUrl", expression = "java(\"/api/files/download/\" + file.getId())")
    FileUploadResponse toResponse(FileMetadata file);
} 
