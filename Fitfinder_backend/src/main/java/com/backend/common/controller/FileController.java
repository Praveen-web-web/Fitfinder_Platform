package com.backend.common.controller;

import java.io.IOException;

import com.backend.common.dto.request.FileUploadRequest;
import jakarta.validation.Valid;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import com.backend.common.dto.response.FileUploadResponse;
import com.backend.common.service.FileService;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;
    
    @PostMapping("/upload")
    public FileUploadResponse upload(@Valid
                                     @ModelAttribute FileUploadRequest request) throws IOException {

        return fileService.upload(request.getFile(), request.getOwnerType(), request.getOwnerId());
    }
    
    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> download(@PathVariable Long fileId) {
        Resource resource = fileService.download(fileId);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename =\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @DeleteMapping("/delete/{fileId}")
    public ResponseEntity<Void> delete(@PathVariable Long fileId){
        fileService.delete(fileId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/owner/{ownerType}/{ownerId}")
    public List<FileUploadResponse> getFilesByOwner(@PathVariable String ownerType,
                                                    @PathVariable long ownerId){
        return fileService.getFilesByOwner(ownerType, ownerId);
    }
}
