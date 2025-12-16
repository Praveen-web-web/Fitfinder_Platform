package com.backend.assessment.repository;

import com.backend.assessment.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
