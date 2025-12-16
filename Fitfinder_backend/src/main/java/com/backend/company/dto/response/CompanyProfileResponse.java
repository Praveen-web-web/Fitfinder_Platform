package com.backend.company.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyProfileResponse {

    private String token;
    private String role;
    private String companyEmail;
    private boolean approved;
}
