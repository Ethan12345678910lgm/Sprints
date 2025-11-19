package com.ubuntuthreads.app;

import com.ubuntuthreads.app.model.Product;
import com.ubuntuthreads.app.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class ProductRepositoryTest {
    @Autowired
    private ProductRepository repository;

    @Test
    void savesProduct() {
        Product p = new Product();
        p.setName("Repo");
        p.setSlug("repo");
        p.setPrice(BigDecimal.ONE);
        p.setSizes(List.of("S"));
        repository.save(p);

        assertThat(repository.findAll()).hasSize(1);
    }
}