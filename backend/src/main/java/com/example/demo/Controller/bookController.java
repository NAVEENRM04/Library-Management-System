package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Entity.booksEntity;
import com.example.demo.Service.booksService;

@CrossOrigin("*")
@RestController
public class bookController {
	@Autowired
	private booksService bs;
	@GetMapping("/getbookdata")
	public List<booksEntity> getbookdet()
	{
		return bs.getBooksdata();
	}
	@PostMapping("/savebookdata")
	public String savebookdata(@RequestBody booksEntity be)
	{
		String bookname = be.getBookname();
		boolean checkBookname = bs.book(bookname);
		if(!checkBookname )
		{
			bs.postBooksdata(be);
			return " book info updated";
		}
		else
		{
			return "Book available already";			
		}
	}
	@DeleteMapping("/delete/{id}")
	public String deleteBooksdata(@PathVariable int id)
	{
		bs.deletebooksdata(id);
		return "id: "+id+"detail has been removed";
	}
	
	
	

}
