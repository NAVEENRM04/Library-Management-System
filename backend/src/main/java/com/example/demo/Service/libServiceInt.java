package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.libEntity;

public interface libServiceInt {
	public List<libEntity> getLibdata();
	public String postLibdata(libEntity le);
	public void deleteLibdata(int id);
}
