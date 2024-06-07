package com.mseck.controller;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mseck.model.Role;
import com.mseck.model.UserEntity;
import com.mseck.repository.RoleRepository;
import com.mseck.repository.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:4200")
public class AuthController {


	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	@PostMapping("/register")
	public ResponseEntity<UserEntity> register(@RequestBody UserEntity userEntity) {
	
		if(userRepository.existsByUsername(userEntity.getUsername())) {
			return new ResponseEntity<UserEntity>(userEntity, HttpStatus.BAD_REQUEST);
		}
		UserEntity user = new UserEntity();
		user.setUsername(userEntity.getUsername());
		user.setPassword(passwordEncoder.encode(userEntity.getPassword()));
		
		Role roles = roleRepository.findByName("USER").get();
		user.setRoles(Collections.singletonList(roles));
		
		userRepository.save(user);
		
		return new ResponseEntity<UserEntity>(user, HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserEntity> login(@RequestBody UserEntity userEntity){
		
		try {
			Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(userEntity.getUsername(), userEntity.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			return new ResponseEntity<UserEntity>(userEntity, HttpStatus.OK);
			
			
		} catch (BadCredentialsException e) {
			return new ResponseEntity<UserEntity>(userEntity, HttpStatus.NOT_ACCEPTABLE);
			
		}	catch (UsernameNotFoundException e) {
			return new ResponseEntity<UserEntity>(userEntity, HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	@PostMapping("/logout")
    public ResponseEntity<String> logout() {
        SecurityContextHolder.clearContext();
        return new ResponseEntity<>("User logged out success!", HttpStatus.OK);
    }
	
}
