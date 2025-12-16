package com.backend.assessment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.assessment.entity.Assessment;
import java.util.List;

public interface AssessmentRepository extends JpaRepository<Assessment, Long> {
    List<Assessment> findByCompanyId(Long companyId);
}
