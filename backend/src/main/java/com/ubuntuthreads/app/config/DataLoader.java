package com.ubuntuthreads.app.config;

import com.ubuntuthreads.app.model.*;
import com.ubuntuthreads.app.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataLoader {
    @Bean
    CommandLineRunner seedData(ProductRepository productRepo, CollectionRepository collectionRepo, OrderRepository orderRepo, AppUserRepository userRepo) {
        return args -> {
            if (productRepo.count() == 0) {
                Product kimono = new Product();
                kimono.setName("Khayelitsha Kimono");
                kimono.setSlug("khayelitsha-kimono");
                kimono.setDescription("Flowing hemp kimono inspired by Cape Town sunsets.");
                kimono.setPrice(BigDecimal.valueOf(1200));
                kimono.setMaterials("Hemp & cotton");
                kimono.setCollectionName("Cape Dawn Capsule");
                kimono.setSizes(List.of("S", "M", "L"));
                kimono.setImages(List.of("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"));
                kimono.setTags(List.of("outerwear", "hemp"));

                Product shirt = new Product();
                shirt.setName("Harbor Linen Shirt");
                shirt.setSlug("harbor-linen-shirt");
                shirt.setDescription("Relaxed linen shirt with corozo buttons.");
                shirt.setPrice(BigDecimal.valueOf(750));
                shirt.setMaterials("Linen");
                shirt.setCollectionName("Harbor Lines");
                shirt.setSizes(List.of("M", "L", "XL"));
                shirt.setImages(List.of("https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"));
                shirt.setTags(List.of("tops", "linen"));

                productRepo.saveAll(List.of(kimono, shirt));
            }

            if (collectionRepo.count() == 0) {
                Collection capsule = new Collection();
                capsule.setName("Cape Dawn Capsule");
                capsule.setSeason("SS24");
                capsule.setDescription("A sunrise-inspired drop celebrating Ubuntu");
                capsule.setHeroImage("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80");
                collectionRepo.save(capsule);
            }

            if (userRepo.count() == 0) {
                AppUser admin = new AppUser();
                admin.setEmail("admin@ubuntu.com");
                admin.setPassword("$2a$10$2lO5tSg3g0k1"); // placeholder hashed string
                admin.setRole("ADMIN");
                userRepo.save(admin);
            }

            if (orderRepo.count() == 0) {
                Order order = new Order();
                Customer customer = new Customer();
                customer.setName("Imani");
                customer.setEmail("imani@ubuntu.com");
                OrderItem item = new OrderItem();
                item.setProduct(productRepo.findAll().get(0));
                item.setQuantity(1);
                item.setUnitPrice(BigDecimal.valueOf(1200));
                order.setOrderItems(List.of(item));
                order.setTotal(BigDecimal.valueOf(1200));
                order.setStatus("created");
                orderRepo.save(order);
            }
        };
    }
}