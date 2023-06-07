package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.libEntity;

public interface libRepoInt extends JpaRepository<libEntity, Integer> {

	libEntity findByUsernameAndBookname(String username, String bookname);
	

}
