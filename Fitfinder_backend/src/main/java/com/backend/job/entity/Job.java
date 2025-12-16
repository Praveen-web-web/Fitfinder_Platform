package com.backend.job.entity;

import com.backend.common.entity.BaseEntity;
import com.backend.company.entity.Company;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Job extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false)
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EmploymentType employmentType;

    @Column(nullable = false)
    private Double salary;

    @Column(length = 200)
    private String qualifications;

    @Builder.Default
    @Column(nullable = false)
    private Boolean isActive = true;

    @Column(nullable = false)
    private LocalDateTime postedDate;


    @Column(nullable = false)
    private LocalDateTime applicationDeadline;

    @ElementCollection
    @CollectionTable(name = "job_skills", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "skills",length = 200, nullable = false)
    private Set<String> skills;

    @ElementCollection
    @CollectionTable(name = "job_requirements", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "requirements",length = 200, nullable = false)
    private Set<String> requirements;

    @Column(nullable = false)
    private Integer numberOfPositions;

    @Column(nullable = false)
    private Integer minExperience;

    @Column(nullable = false)
    private Integer maxExperience;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;
}
