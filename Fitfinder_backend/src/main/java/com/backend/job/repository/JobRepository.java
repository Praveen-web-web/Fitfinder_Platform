package com.backend.job.repository;

import com.backend.job.entity.Job;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {


    List<Job> findByIsActiveTrue();

    List<Job> findByCompanyIdAndIsActiveTrue(Long companyId);

    default List<Job> findActiveJobsByCompany(Long companyId) {
        return findByCompanyIdAndIsActiveTrue(companyId);
    }
}
