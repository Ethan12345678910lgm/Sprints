package com.ubuntuthreads.app.repository;

import com.ubuntuthreads.app.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}