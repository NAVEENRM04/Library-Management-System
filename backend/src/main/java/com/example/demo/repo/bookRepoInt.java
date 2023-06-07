package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.booksEntity;

public interface bookRepoInt extends JpaRepository<booksEntity, Integer> {
	public boolean existsByBookname(String bookname);
}
