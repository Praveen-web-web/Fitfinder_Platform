package com.backend.common.filter;

import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.*;

import java.io.IOException;

import jakarta.servlet.http.HttpServletResponse;

@Component
public class RateLimitFilter extends OncePerRequestFilter { 

    private static final int MAX_REQUESTS_PER_MINUTE = 100;
    private AtomicInteger requestCount = new AtomicInteger(0);
    private long lastResetTime = System.currentTimeMillis();

    @Override
    protected void doFilterInternal(jakarta.servlet.http.HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        long currentTime = System.currentTimeMillis();
        if (currentTime - lastResetTime > 60000) {
            requestCount.set(0);
            lastResetTime = currentTime;
        }

        if (requestCount.incrementAndGet() > MAX_REQUESTS_PER_MINUTE) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Rate limit exceeded. Try again later.");
            return;
        }

        filterChain.doFilter(request, response);
    }
}
