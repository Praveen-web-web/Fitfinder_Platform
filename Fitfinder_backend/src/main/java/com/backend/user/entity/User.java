package com.backend.user.entity;

import com.backend.common.entity.BaseEntity;
import lombok.*;
import jakarta.persistence.*;
import lombok.experimental.SuperBuilder;

import java.util.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class User extends BaseEntity {

    @Column(nullable = false)
    private String fullname;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String phone;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Resume resume;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_skills", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "skill_id"))
    private Set<Skill> skills;
}
