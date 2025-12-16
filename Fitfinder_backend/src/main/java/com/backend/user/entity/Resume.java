package com.backend.user.entity;

import com.backend.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "resumes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Resume extends BaseEntity {

    @Column(nullable = false)
    private String filePath;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
