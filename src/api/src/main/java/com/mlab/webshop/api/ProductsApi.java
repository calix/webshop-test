package com.mlab.webshop.api;

import com.mlab.webshop.model.ProductItem;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.NativeWebRequest;

@Validated
public interface ProductsApi {
    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    @RequestMapping(
        method = RequestMethod.POST,
        value = "/products/{productId}",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<ProductItem> createProductItem(
        @PathVariable("productId") String productId,
        @Valid @RequestBody(required = false) ProductItem productItem
    ) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/products/{productId}", produces = { "application/json" })
    default ResponseEntity<ProductItem> getItemByProductId(@PathVariable("productId") String productId) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/products", produces = { "application/json" })
    default ResponseEntity<List<ProductItem>> getAllProducts() {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }
}
