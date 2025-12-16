package com.backend.common.service.serviceImpl;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

import org.springframework.core.io.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.backend.common.dto.response.FileUploadResponse;
import com.backend.common.entity.FileMetadata;
import com.backend.common.exception.FileNotFoundException;
import com.backend.common.mapper.FileMapper;
import com.backend.common.repository.FileMetadataRepository;
import com.backend.common.service.FileService;

import com.backend.common.util.FileUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {

    private final FileMetadataRepository repository;
    private final FileMapper mapper;

    @Override
    public FileUploadResponse upload(MultipartFile file, String ownerType, Long ownerId) throws IOException {
        String filePath = FileUtil.saveFile(file, ownerType.toLowerCase());

        FileMetadata metadata = FileMetadata.builder().originalFileName(file.getOriginalFilename())
                .storedFileName(Path.of(filePath).getFileName().toString()).fileType(file.getContentType())
                .fileSize(file.getSize()).ownerType(ownerType).ownerId(ownerId).build();

        FileMetadata saved = repository.save(metadata);
        return mapper.toResponse(saved);
    }

    @Override
    public Resource download(Long fileId) {
        FileMetadata file = repository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("File not found"));

        try{
            Path path = FileUtil.load(file.getFilePath());

            Resource resource = new UrlResource(path.toUri());

            if(!resource.exists()){
                throw new FileNotFoundException("File not found on disk");
            }
            return resource;
        } catch (Exception ex) {
            throw new FileNotFoundException("File could not be loaded");
        }
    }

    @Override
    public void delete(Long fileId){
        FileMetadata file = repository.findById(fileId).
                orElseThrow(()-> new FileNotFoundException("File not found"));
        FileUtil.delete(file.getFilePath());
        repository.delete(file);
    }

    @Override
    public List<FileUploadResponse> getFilesByOwner(String ownerType, long ownerId) {
        return List.of();
    }
}
