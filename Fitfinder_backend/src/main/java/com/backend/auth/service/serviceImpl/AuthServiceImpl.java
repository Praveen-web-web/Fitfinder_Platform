package com.backend.auth.service.serviceImpl;

import com.backend.auth.service.AuthService;
import com.backend.common.enums.Role;

import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.backend.auth.dto.request.LoginRequest;
import com.backend.auth.dto.request.RegisterRequest;
import com.backend.auth.dto.response.AuthResponse;
import com.backend.auth.entity.Account;
import com.backend.auth.mapper.AuthMapper;
import com.backend.auth.repository.AccountRepository;
import com.backend.security.jwt.JwtTokenProvider;
import com.backend.auth.exception.*;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthServiceImpl implements AuthService {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthMapper authMapper;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse register(RegisterRequest request) {
        String email = request.getEmail().trim().toLowerCase();
        if (accountRepository.existsByEmail(email)) {
            throw new EmailAlreadyExistsException("Email is already in use");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new PasswordMismatchException("Passwords do not match");
        }

        Account account = authMapper.toEntity(request, Role.CANDIDATE);
        account.setPassword(passwordEncoder.encode(request.getPassword()));
        Account savedAccount = accountRepository.save(account);

        String token = jwtTokenProvider.generateToken(savedAccount.getEmail(), savedAccount.getRole().name());

        return AuthResponse.builder()
                .token(token)
                .role(savedAccount.getRole().name())
                .email(savedAccount.getEmail())
                .build();
    }
    
    @Override
    public AuthResponse login(LoginRequest request) {
        Account account = accountRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new AccountNotFoundException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), account.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtTokenProvider.generateToken(account.getEmail(), account.getRole().name());

        return AuthResponse.builder()
                .token(token)
                .role(account.getRole().name())
                .email(account.getEmail())
                .build();
    }

    @Override
    public AuthResponse refreshToken(String refreshToken) {
        if (!jwtTokenProvider.validateRefreshToken(refreshToken)) {
            throw new RuntimeException("Refresh token invalid or expired");
        }
        String email = jwtTokenProvider.extractUsername(refreshToken);
        Account account = accountRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        String newAccessToken = jwtTokenProvider.generateToken(email, account.getRole().name());
        String newRefreshToken = jwtTokenProvider.generateRefreshToken(email);

        return AuthResponse.builder().token(newAccessToken).refreshToken(newRefreshToken).role(account.getRole().name())
                .email(email).expiresIn(jwtTokenProvider.getExpirationMillis()).build();
    }

}
