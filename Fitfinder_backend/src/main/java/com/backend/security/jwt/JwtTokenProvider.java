package com.backend.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.*;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretkey;

    @Value("${jwt.expiration}")
    private long expirationTime;

    @Value("${jwt.refresh-expiration}")
    private long refreshExpirationTime;

    private Key getSigningKey(){
        return Keys.hmacShaKeyFor(secretkey.getBytes());
    }

    public String generateToken(String username, String role) {

        return Jwts.builder().setSubject(username)
                .claim("role",role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(getSigningKey(),SignatureAlgorithm.HS256)
                .compact();
    }
    public Claims extractClaims(String token){
        return Jwts.parser()
                .setSigningKey(getSigningKey())
                .build().
                parseClaimsJws(token)
                .getBody();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public String extractUserRole(String token) {

        return extractClaims(token).get("role",String.class);
    }

    public boolean isTokenExpired(String token){
        return extractClaims(token).getExpiration().before(new Date());
    }

    public boolean validateToken(String token) {
        try {
            return !isTokenExpired(token);
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
    
    public String generateRefreshToken(String username) {
        return Jwts.builder().setSubject(username).setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + refreshExpirationTime))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
    }

    public boolean validateRefreshToken(String token) {
        try {
            Jwts.parser().setSigningKey(getSigningKey()).build().parseClaimsJws(token);
            return true;
        } catch (JwtException ex) {
            return false;
        }
    }

    public long getExpirationMillis() {
        return expirationTime;
    }

    public long getRefreshExpirationMillis() {
        return refreshExpirationTime;
    }
    
}
