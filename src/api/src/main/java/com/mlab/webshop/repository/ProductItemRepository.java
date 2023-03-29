package com.mlab.webshop.repository;

import com.mlab.webshop.model.ProductItem;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;

public interface ProductItemRepository extends MongoRepository<ProductItem, String> {
    List<ProductItem> findAll();
}
