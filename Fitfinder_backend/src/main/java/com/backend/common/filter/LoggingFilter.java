package com.backend.common.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.*;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class LoggingFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(LoggingFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        long startTime = System.currentTimeMillis();
        filterChain.doFilter(request, response);
        long duration = System.currentTimeMillis() - startTime;

        String method = request.getMethod();
        String uri = request.getRequestURI();
        int status = response.getStatus();

        log.info("Request: {} {} | Response: {} | Duration: {} ms", method, uri, status, duration);
    }

}
