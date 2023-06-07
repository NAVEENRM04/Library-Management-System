package com.example.demo.Entity;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lib")
public class libEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="sno")
	private int sno;
	@Column(name="username")
	private String username;
	@Column(name="bookname")
	private String bookname;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(name="borrow date")
	private Date date;
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public libEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public libEntity(int sno, String username, String bookname, Date date) {
		super();
		this.sno = sno;
		this.username = username;
		this.bookname = bookname;
		this.date = date;
	}

}
