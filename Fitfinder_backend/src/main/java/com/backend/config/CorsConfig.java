package com.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.*;
import org.springframework.context.annotation.Bean;
import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        
        var cors = new CorsConfiguration();

        cors.setAllowedOrigins(List.of("http://localhost:5173","http://localhost:3000"));

        cors.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));

        cors.setAllowedHeaders(List.of("Authorization", "Content-Type", "X-Requested-With", "Accept"));

        cors.setExposedHeaders(List.of("Authorization"));

        cors.setAllowCredentials(true);

        cors.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);

        return source;
        
    }
}
