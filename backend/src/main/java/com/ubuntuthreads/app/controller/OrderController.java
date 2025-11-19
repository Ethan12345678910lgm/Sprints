package com.ubuntuthreads.app.controller;

import com.ubuntuthreads.app.model.Order;
import com.ubuntuthreads.app.repository.OrderRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderRepository repository;

    public OrderController(OrderRepository repository) { this.repository = repository; }

    @PostMapping
    public ResponseEntity<Order> create(@Valid @RequestBody Order order) {
        order.setStatus("created");
        return ResponseEntity.ok(repository.save(order));
    }
}