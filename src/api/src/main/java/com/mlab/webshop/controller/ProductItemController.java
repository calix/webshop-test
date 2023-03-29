package com.mlab.webshop.controller;

import com.mlab.webshop.api.ProductsApi;
import com.mlab.webshop.model.ProductItem;
import com.mlab.webshop.repository.ProductItemRepository;
import java.net.URI;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class ProductItemController implements ProductsApi {

    private final ProductItemRepository productItemRepository;

    public ProductItemController(ProductItemRepository productItemRepository) {
        this.productItemRepository = productItemRepository;
    }

    public ResponseEntity<ProductItem> createProductItem(String productId, ProductItem productItem) {
        final ProductItem savedProductItem = productItemRepository.save(productItem);
        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(productItem.get_id())
            .toUri();
        return ResponseEntity.created(location).body(savedProductItem);
    }

    public ResponseEntity<ProductItem> getItemByProductId(String productId) {
        return productItemRepository
            .findById(productId)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<List<ProductItem>> getAllProducts() {
        List<ProductItem> res = productItemRepository.findAll();
        return ResponseEntity.status(200).body(res);
    }
}
