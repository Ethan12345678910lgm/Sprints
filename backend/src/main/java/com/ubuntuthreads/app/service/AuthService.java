package com.ubuntuthreads.app.service;

import com.ubuntuthreads.app.model.AppUser;
import com.ubuntuthreads.app.repository.AppUserRepository;
import com.ubuntuthreads.app.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AuthService {
    private final AppUserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(AppUserRepository repository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String register(String email, String password) {
        AppUser user = new AppUser();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        repository.save(user);
        return jwtUtil.generateToken(email, Map.of("role", user.getRole(), "id", user.getId()));
    }

    public String login(String email, String password) {
        AppUser user = repository.findByEmail(email).orElseThrow();
        if (!passwordEncoder.matches(password, user.getPassword())) throw new RuntimeException("Bad credentials");
        return jwtUtil.generateToken(email, Map.of("role", user.getRole(), "id", user.getId()));
    }
}