package com.backend.company.repository;

import com.backend.company.entity.Company;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface CompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findByAccountId(Long accountId);

    boolean existsByAccountEmail(String email);

    Optional<Company> findByEmail(String companyEmail);
}
