package com.backend.user.dto.response;

import lombok.*;
import java.util.Set;

@Getter
@Builder
public class UserProfileResponse {

    private long id;
    private String fullName;
    private String email;
    private String phone;
    private Set<String> skills;
}
