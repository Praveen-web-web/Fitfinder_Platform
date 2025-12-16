package com.backend.company.service.serviceImpl;

import org.springframework.stereotype.Service;

import com.backend.auth.repository.AccountRepository;
import com.backend.company.dto.request.CompanyRegisterRequest;
import com.backend.company.dto.response.CompanyProfileResponse;
import com.backend.company.entity.Company;
import com.backend.company.mapper.CompanyMapper;
import com.backend.company.repository.CompanyRepository;
import com.backend.company.service.CompanyService;
import lombok.RequiredArgsConstructor;
import com.backend.auth.entity.Account;
import com.backend.auth.exception.AccountNotFoundException;
import com.backend.company.exception.*;


@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final CompanyMapper companyMapper;
    private final AccountRepository accountRepository;

    @Override
    public CompanyProfileResponse registerCompany(CompanyRegisterRequest request, String loogedInEmail) {
        Account account = accountRepository.findByEmail(loogedInEmail)
                .orElseThrow(() -> new AccountNotFoundException("Account not found"));

        if(companyRepository.findByAccountId(account.getId()).isPresent()){
            throw new RuntimeException("Company already register for this account");
        }

        Company company = companyMapper.toEntity(request, account);
        Company savedCompany = companyRepository.save(company);

        return companyMapper.toResponse(savedCompany);
    }

    @Override
    public CompanyProfileResponse getMyProfile(String loggedInEmail) {
        Account account = accountRepository.findByEmail(loggedInEmail)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        Company company = companyRepository.findByAccountId(account.getId())
                .orElseThrow(() -> new CompanyNotFoundException("Company profile not found"));
        if(!company.isApproved()) {
            throw new CompanyApprovalException("Company not approved by admin yet");
        }

        return companyMapper.toResponse(company);
    }
}
