package com.backend.common.filter;


import org.springframework.stereotype.Component;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.UUID;


@Component
public class RequestIdFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
       
        HttpServletResponse res = (HttpServletResponse) response;
        String requestId = UUID.randomUUID().toString();
        
        res.setHeader("X-Request-ID", requestId);

        chain.doFilter(request, response);
    }

}
