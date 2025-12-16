package com.backend.user.repository;

import java.util.Optional;
import com.backend.user.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);

}
