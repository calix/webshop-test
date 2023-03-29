package com.mlab.webshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebShopApplication {

    public static void main(String[] args) {
        new SpringApplication(WebShopApplication.class).run(args);
    }
}
