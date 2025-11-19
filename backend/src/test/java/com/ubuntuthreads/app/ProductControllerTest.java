package com.ubuntuthreads.app;

import com.ubuntuthreads.app.controller.ProductController;
import com.ubuntuthreads.app.model.Product;
import com.ubuntuthreads.app.service.ProductService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProductController.class)
public class ProductControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    @Test
    void returnsProducts() throws Exception {
        Product p = new Product();
        p.setName("Test");
        p.setSlug("test");
        p.setPrice(BigDecimal.TEN);
        Mockito.when(productService.findAll()).thenReturn(List.of(p));

        mockMvc.perform(get("/api/products").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Test"));
    }

    @Test
    void returnsNotFoundWhenProductIsMissing() throws Exception {
        Mockito.when(productService.findById(42L))
                .thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));

        mockMvc.perform(get("/api/products/42").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }
}