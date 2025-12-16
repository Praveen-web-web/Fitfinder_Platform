package com.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.*;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI fitFinderOpenAPI() {
        
        return new OpenAPI()
                .info(new Info().title("Fitfinder API").description("Backend APIs for Fitfinder Platform")
                        .version("1.0.0"))
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                .components(new Components().addSecuritySchemes("bearerAuth", new SecurityScheme().name("bearerAuth")
                        .type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")));
    }

}
