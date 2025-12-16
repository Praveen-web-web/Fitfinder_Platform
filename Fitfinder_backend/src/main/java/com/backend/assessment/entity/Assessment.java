package com.backend.assessment.entity;

import com.backend.company.entity.*;
import com.backend.common.entity.*;
import com.backend.common.enums.*;
import com.backend.job.entity.Job;
import com.backend.user.entity.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@Table(name = "assessments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Assessment extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "candidate_id",nullable = false)
    private User candidateId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_id",nullable = false)
    private Job jobId;

    @Enumerated(EnumType.STRING)
    private AssessmentStatus status;

    private Integer mcqScore;

    private Integer codingScore;

    private Integer score;

    @OneToMany(mappedBy = "assessment", cascade = CascadeType.ALL)
    private List<Answer> answers;

}
