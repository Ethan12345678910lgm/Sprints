package com.ubuntuthreads.app.repository;

import com.ubuntuthreads.app.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionRepository extends JpaRepository<Collection, Long> {
}