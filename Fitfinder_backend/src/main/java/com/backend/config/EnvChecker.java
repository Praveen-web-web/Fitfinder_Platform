package com.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.slf4j.*;


@Component
public class EnvChecker implements CommandLineRunner {

   private static final Logger log = LoggerFactory.getLogger(EnvChecker.class);

    @Value("${DB_URL}")
    private String dbUrl;

    @Value("${DB_USERNAME}")
    private String dbUsername;

    @Value("${DB_PASSWORD}")
    private String dbPassword;

    @Override
    public void run(String... args) {
        log.info("🔍 Environment Check:");
        log.info("DB_URL: {}", dbUrl);
        log.info("DB_USERNAME: {}", dbUsername);
        log.info("DB_PASSWORD: {}", (dbPassword != null ? "******" : "null"));
    }
}
