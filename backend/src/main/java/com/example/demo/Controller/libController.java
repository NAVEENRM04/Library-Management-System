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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.libEntity;
import com.example.demo.Entity.signupEntity;
import com.example.demo.Service.libService;
@CrossOrigin("*")
@RestController
public class libController {
	@Autowired
	private libService ls;
	@GetMapping("/getlibdata")
	public List<libEntity> getlibdet()
	{
		return ls.getLibdata();
	}
	@PostMapping("/savelibdata")
	public String savelibdata(@RequestBody libEntity le)
	{
		return ls.postLibdata(le);
	}
	@DeleteMapping("/deletelibdata/{id}")
	public String deletelibdata(@PathVariable int id)
	{
		ls.deleteLibdata(id);
		return "detail deleted";
	}
	
	@GetMapping(value = "/getbylib/{username}")
	private ResponseEntity<Object> getuserbyname(@PathVariable String username) {
		List<libEntity> estateModel = ls.getlibname(username);
		return new ResponseEntity<>(estateModel, HttpStatus.OK);
	}
	

}
