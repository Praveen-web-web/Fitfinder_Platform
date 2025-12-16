package com.backend.security;

import org.springframework.stereotype.Service;
import com.backend.auth.repository.AccountRepository;
import com.backend.auth.entity.Account;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.userdetails.*;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return new CustomUserDetails(
            account.getId(),
            account.getEmail(),
            account.getPassword(),
            account.getRole()
        );
    }
}
