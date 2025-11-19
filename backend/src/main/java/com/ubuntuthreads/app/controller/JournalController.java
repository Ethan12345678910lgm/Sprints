package com.ubuntuthreads.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/journal")
public class JournalController {
    @GetMapping
    public List<Map<String, String>> journal() {
        return List.of(
                Map.of("slug", "crafting-with-community", "title", "Crafting with Community", "excerpt", "How co-ops shape the capsule"),
                Map.of("slug", "styling-ubuntu-layers", "title", "Styling Ubuntu Layers", "excerpt", "Layering natural fibres")
        );
    }
}