package com.backend.common.util;

import java.io.IOException;
import java.nio.file.*;

import org.springframework.web.multipart.MultipartFile;
import java.util.UUID;

public class FileUtil {

    private static final String BASE_DIR = "uploads";

    private FileUtil() {
        // Private constructor to prevent instantiation
    }

    public static String saveFile(MultipartFile file, String directory) throws IOException {

        Path upLoadPath = Paths.get(BASE_DIR, directory).toAbsolutePath().normalize();
        if (!Files.exists(upLoadPath)) {
            Files.createDirectories(upLoadPath);
        }
        String storedFileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

        Path filePath = upLoadPath.resolve(storedFileName);

        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return filePath.toString();

    }
    
    public static Path load(String filePath) {
        return Paths.get(filePath).toAbsolutePath().normalize();
    }

    public static void delete(String filePath) {

    }
}
