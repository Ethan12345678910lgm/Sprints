package com.ubuntuthreads.app.controller;

import com.ubuntuthreads.app.model.Product;
import com.ubuntuthreads.app.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) { this.productService = productService; }

    @GetMapping
    public List<Product> all() { return productService.findAll(); }

    @GetMapping("/{id}")
    public Product get(@PathVariable Long id) { return productService.findById(id); }
}