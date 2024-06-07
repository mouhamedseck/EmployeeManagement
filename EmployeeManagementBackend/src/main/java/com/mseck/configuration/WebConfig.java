//package com.mseck.configuration;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//    	registry.addMapping("/employee/**") 
//        .allowedOrigins("http://localhost:4200")
//        .allowedMethods("GET", "POST", "PUT", "DELETE")
//        .allowedHeaders("*");
//
//    	registry.addMapping("/department/**") 
//        .allowedOrigins("http://localhost:4200")
//        .allowedMethods("GET", "POST", "PUT", "DELETE")
//        .allowedHeaders("*");
//    }
//}
