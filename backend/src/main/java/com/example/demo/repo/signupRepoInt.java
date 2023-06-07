package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.signupEntity;

@Repository
public interface signupRepoInt extends JpaRepository<signupEntity, Integer>{
	public boolean existsByUsername(String user);
	public boolean existsByEmail(String email);
	public signupEntity findByUsername(String username);
	
}
