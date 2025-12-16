package com.backend.common.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.backend.common.entity.FileMetadata;

public interface FileMetadataRepository extends JpaRepository<FileMetadata, Long> {
    List<FileMetadata> findByOwnerTypeAndOwnerId(String ownerType, Long ownerId);
}
