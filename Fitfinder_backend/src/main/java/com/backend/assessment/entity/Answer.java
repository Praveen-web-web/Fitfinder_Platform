package com.backend.assessment.entity;

import com.backend.common.entity.BaseEntity;

import lombok.*;
import jakarta.persistence.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "answers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class Answer extends BaseEntity {

    private Long questionId;

    private String selectedOption;

    private Boolean correct;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assessment_id")
    private Assessment assessment;
}
