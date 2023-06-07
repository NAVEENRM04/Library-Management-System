package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.booksEntity;
import com.example.demo.repo.bookRepoInt;
@Service
public class booksService implements bookServiceInt {
	@Autowired
	private bookRepoInt bri;
	@Override
	public List<booksEntity> getBooksdata() {
		// TODO Auto-generated method stub
		return bri.findAll();
	}

	@Override
	public void postBooksdata(booksEntity be) {
		// TODO Auto-generated method stub
		bri.save(be);

	}

	@Override
	public void updateBooksdata(booksEntity be) {
		// TODO Auto-generated method stub
		bri.save(be);

	}

	@Override
	public void deletebooksdata(int id) {
		// TODO Auto-generated method stub
		bri.deleteById(id);

	}

	@Override
	public boolean book(String bookname) {
		// TODO Auto-generated method stub
		return bri.existsByBookname(bookname);
	}

	





}
