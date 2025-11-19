package com.ubuntuthreads.app;

import com.ubuntuthreads.app.model.Product;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.assertj.core.api.Assertions.assertThat;

public class ProductValidationTest {
    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    void requiresName() {
        Product p = new Product();
        p.setPrice(BigDecimal.ONE);
        assertThat(validator.validate(p)).isNotEmpty();
    }
}