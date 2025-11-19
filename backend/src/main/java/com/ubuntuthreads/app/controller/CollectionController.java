package com.ubuntuthreads.app.controller;

import com.ubuntuthreads.app.model.Collection;
import com.ubuntuthreads.app.repository.CollectionRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {
    private final CollectionRepository repository;
    public CollectionController(CollectionRepository repository) { this.repository = repository; }

    @GetMapping
    public List<Collection> all() { return repository.findAll(); }

    @GetMapping("/{id}")
    public Collection get(@PathVariable Long id) { return repository.findById(id).orElseThrow(); }
}