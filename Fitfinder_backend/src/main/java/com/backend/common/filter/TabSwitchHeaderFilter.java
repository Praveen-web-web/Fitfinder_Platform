package com.backend.common.filter;

import org.springframework.stereotype.Component;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
import org.springframework.web.filter.OncePerRequestFilter;


@Component
public class TabSwitchHeaderFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, jakarta.servlet.http.HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        String tabSwitchCount = request.getHeader("X-Tab-Switch-Count");

        if (tabSwitchCount != null) {
            int count = Integer.parseInt(tabSwitchCount);
            count++;
            if(count > 3) {
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.getWriter().write("Assessment disqualified due to too many tab switches detected.");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }


}
