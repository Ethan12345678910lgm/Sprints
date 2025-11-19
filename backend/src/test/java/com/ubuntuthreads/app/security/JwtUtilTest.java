package com.ubuntuthreads.app.security;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

class JwtUtilTest {

    private final JwtUtil jwtUtil = new JwtUtil("test-secret-key-for-ubuntu-threads", 3_600_000);

    @Test
    void generateTokenRetainsSubjectEvenWhenClaimsPresent() {
        String token = jwtUtil.generateToken("user@ubuntu.com", Map.of("role", "ADMIN"));

        assertThat(jwtUtil.getSubject(token)).isEqualTo("user@ubuntu.com");
    }

    @Test
    void generateTokenHandlesNullClaims() {
        String token = jwtUtil.generateToken("another@ubuntu.com", null);

        assertThat(jwtUtil.getSubject(token)).isEqualTo("another@ubuntu.com");
    }
}