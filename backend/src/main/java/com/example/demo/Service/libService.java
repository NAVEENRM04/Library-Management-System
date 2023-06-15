package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.libEntity;
import com.example.demo.repo.bookRepoInt;
import com.example.demo.repo.libRepoInt;
import com.example.demo.repo.signupRepoInt;
@Service
public class libService implements libServiceInt {
	@Autowired 
	private libRepoInt lri;
	@Autowired
	private signupRepoInt sigInt;
	@Autowired
	private bookRepoInt bkri;
	@Override
	public List<libEntity> getLibdata() {
		// TODO Auto-generated method stub
		return lri.findAll() ;
	}

	@Override
	public String postLibdata(libEntity le) {
		
		boolean user = sigInt.existsByUsername(le.getUsername());
		boolean bk = bkri.existsByBookname(le.getBookname());
		
		libEntity lib = lri.findByUsernameAndBookname(le.getUsername(),le.getBookname());
		if(lib==null && user && bk) {
			lri.save(le);
			return "Book issued";
		}
		else if(lib==null && bk)
			return "User Not Register";
		else if(!bk && lib!=null)
			return "Book is  Not available";
		
		return "Book already Issued";
	}

	@Override
	public void deleteLibdata(int id) {
		// TODO Auto-generated method stub
		lri.deleteById(id);

	}

	@Override
	public List<libEntity> getlibname(String username) {
		// TODO Auto-generated method stub
		return lri.findByusernameContainingIgnoreCase(username);
	}

	

}
