package com.example.demo.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.booksEntity;
import com.example.demo.Entity.libEntity;

public interface bookRepoInt extends JpaRepository<booksEntity, Integer> {
	public boolean existsByBookname(String bookname);
	public List<booksEntity> findByBooknameContainingIgnoreCase(String bookname);
	
}
