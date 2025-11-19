package com.ubuntuthreads.app.controller;

import com.ubuntuthreads.app.repository.OrderRepository;
import com.ubuntuthreads.app.repository.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public AdminController(ProductRepository productRepository, OrderRepository orderRepository) {
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping("/overview")
    public Map<String, Object> overview() {
        return Map.of(
                "products", productRepository.count(),
                "orders", orderRepository.count(),
                "revenue", 32400
        );
    }
}