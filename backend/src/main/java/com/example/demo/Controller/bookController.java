package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Entity.booksEntity;
import com.example.demo.Service.booksService;

@CrossOrigin("*")
@RestController
public class bookController {
	@Autowired
	private booksService bs;
	@DeleteMapping("/deletebookdata/{id}")
	public String deleteBooksdata(@PathVariable int id)
	{
		bs.deletebooksdata(id);
		return "id: "+id+"detail has been removed";
	}
	@GetMapping("/getbookdata")
	public List<booksEntity> getbookdet()
	{
		return bs.getBooksdata();
	}
	@PostMapping("/savebookdata")
	public String savebookdata(@RequestBody booksEntity be)
	{
		String bookname = be.getBookname();
		boolean checkBookname = bs.bookname(bookname);
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
	@PutMapping("/updatebookdata/{id}")
	public String updatedata(@PathVariable int id ,@RequestBody booksEntity be)
	{
		boolean checkBookname = bs.bookname(be.getBookname());
		if(!checkBookname)
		{
			bs.updateBooksdata(be);
			return " update successfull";
		}
		else
		{
			return "Book already present";
		}
		
	}
	@GetMapping(value = "/getbybookname/{bookname}")
	private ResponseEntity<Object> getEstatebyname(@PathVariable String bookname) {
		List<booksEntity> estateModel = bs.getBookbyname(bookname);
		return new ResponseEntity<>(estateModel, HttpStatus.OK);
	}
	
	
	

}
