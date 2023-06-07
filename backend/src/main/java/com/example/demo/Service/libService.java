package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.libEntity;
import com.example.demo.repo.libRepoInt;
import com.example.demo.repo.signupRepoInt;
@Service
public class libService implements libServiceInt {
	@Autowired 
	private libRepoInt lri;
	@Autowired
	private signupRepoInt sigInt;
	@Override
	public List<libEntity> getLibdata() {
		// TODO Auto-generated method stub
		return lri.findAll() ;
	}

	@Override
	public String postLibdata(libEntity le) {
		
		boolean user = sigInt.existsByUsername(le.getUsername());
		libEntity lib = lri.findByUsernameAndBookname(le.getUsername(),le.getBookname());
		if(lib==null && user) {
			lri.save(le);
			return "Book issued";
		}
		else if(lib==null)
			return "User Not Register";
		return "Book already Issued";
	}

	@Override
	public void deleteLibdata(int id) {
		// TODO Auto-generated method stub
		lri.deleteById(id);

	}

}
