package com.backend.common.exception;


import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.backend.job.exception.NoActiveJobsFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import jakarta.servlet.http.HttpServletRequest;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiErrorResponse> handleRuntime(RuntimeException ex, HttpServletRequest request) {
            ApiErrorResponse response = ApiErrorResponse.builder()
                            .timestamp(LocalDateTime.now())
                            .status(HttpStatus.BAD_REQUEST.value())
                            .error("BAD_REQUEST")
                            .message(ex.getMessage())
                            .path(request.getRequestURI())
                            .build();

            return ResponseEntity.badRequest().body(response);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handleValidation(MethodArgumentNotValidException ex,
                    HttpServletRequest request) {
            var fieldErrors = ex.getBindingResult().getFieldErrors().stream()
                            .map(err -> new ApiErrorResponse.FieldError(err.getField(), err.getDefaultMessage()))
                            .collect(Collectors.toList());

            ApiErrorResponse response = ApiErrorResponse.builder()
                            .timestamp(LocalDateTime.now())
                            .status(HttpStatus.BAD_REQUEST.value())
                            .error("VALIDATION_FAILED")
                            .message("Validation failed for one or more fields.")
                            .path(request.getRequestURI())
                            .fieldErrors(fieldErrors)
                            .build();

            return ResponseEntity.badRequest().body(response);
    }
    
    @ExceptionHandler(NoActiveJobsFoundException.class)
    public ResponseEntity<ApiErrorResponse> handleJobNotFound(NoActiveJobsFoundException ex,
                    HttpServletRequest request) {
            ApiErrorResponse response = ApiErrorResponse.builder()
                            .timestamp(LocalDateTime.now())
                            .status(HttpStatus.NOT_FOUND.value())
                            .error("NOT_FOUND")
                            .message(ex.getMessage())
                            .path(request.getRequestURI())
                            .build();

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        
    }
}
