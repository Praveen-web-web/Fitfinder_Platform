package com.backend.common.filter;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class AssessmentSecurityFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        if(request.getRequestURI().startsWith("/api/assessments/")) {
            String startHeader = request.getHeader("X-Assessment-Started");
            String endHeader = request.getHeader("X-Assessment-Ended");

            if (startHeader != null && endHeader != null) {
                LocalDateTime now = LocalDateTime.now();
                LocalDateTime start = LocalDateTime.parse(startHeader);
                LocalDateTime end = LocalDateTime.parse(endHeader);

                if (now.isBefore(start) || now.isAfter(end)) {
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                    response.getWriter().write("Access to assessment is outside the allowed time window.");
                    return;
                }
            }
        }
        filterChain.doFilter(request, response);
    }
}
