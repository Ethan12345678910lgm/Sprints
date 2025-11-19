package com.ubuntuthreads.app.repository;

import com.ubuntuthreads.app.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}