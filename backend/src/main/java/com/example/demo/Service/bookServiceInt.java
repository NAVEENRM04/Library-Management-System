package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.booksEntity;

public interface bookServiceInt {
	public List<booksEntity> getBooksdata();
	public void postBooksdata(booksEntity be);
	public void updateBooksdata(booksEntity be);
	public void deletebooksdata(int id);
	public boolean bookname(String bookname);
	public List<booksEntity> getBookbyname(String bookname);
	
	

}
