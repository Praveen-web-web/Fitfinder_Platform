package com.backend.company.dto.request;

import jakarta.validation.constraints.*;

import lombok.*;

@Getter
@Setter
public class CompanyRegisterRequest {

    @NotBlank(message = "Full name is required")
    private String companyName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Pattern(regexp = "^[A-Za-z0-9+_.]+@[A-Za-z0-9.]+\\.(com|in|org)$", message = "Email must end with .com or .in or .org")
    private String companyEmail;


    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Phone number must be a valid 10-digit Indian number starting with 6-9")
    private String companyPhone;

    @NotBlank(message = "Password is required")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&])[A-Za-z \\d@$!%?&]{8,16}$",
             message = "Password must be at 8-16 characters long and include uppercase,lowercase letter, number, and special character")
    private String password;

    @NotBlank(message = "Confirm password is required")
    private String confirmPassword;
}
