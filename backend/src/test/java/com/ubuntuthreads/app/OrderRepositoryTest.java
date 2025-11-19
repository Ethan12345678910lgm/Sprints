package com.ubuntuthreads.app;

import com.ubuntuthreads.app.model.Customer;
import com.ubuntuthreads.app.model.Order;
import com.ubuntuthreads.app.model.OrderItem;
import com.ubuntuthreads.app.model.Product;
import com.ubuntuthreads.app.repository.OrderRepository;
import com.ubuntuthreads.app.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class OrderRepositoryTest {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Test
    void savesOrderWithNewCustomer() {
        Product product = new Product();
        product.setName("Test Kimono");
        product.setSlug("test-kimono");
        product.setPrice(BigDecimal.TEN);
        product.setSizes(List.of("M"));
        productRepository.save(product);

        Customer customer = new Customer();
        customer.setName("Lindiwe");
        customer.setEmail("lindiwe@example.com");

        OrderItem item = new OrderItem();
        item.setProduct(product);
        item.setQuantity(1);
        item.setUnitPrice(BigDecimal.TEN);

        Order order = new Order();
        order.setCustomer(customer);
        order.setOrderItems(List.of(item));
        order.setTotal(BigDecimal.TEN);
        order.setStatus("created");

        Order saved = orderRepository.save(order);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getCustomer()).isNotNull();
        assertThat(saved.getCustomer().getId()).isNotNull();
    }
}