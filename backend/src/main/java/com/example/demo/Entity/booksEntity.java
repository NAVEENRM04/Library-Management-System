package com.example.demo.Entity;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name="booksdetail")
public class booksEntity {
	@Id
	@Column(name="Book Id")
	private int bookid;
	@Column(name="Book Name")
	private String bookname;
	@Column(name="Author Name")
	private String authorname;
	@Column(name="Book Category")
	private String bookcategory;
	@Column(name="Book Price")
	private String bookprice;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(name="Date of publish")
	private Date bookpublishment;
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getAuthorname() {
		return authorname;
	}
	public void setAuthorname(String authorname) {
		this.authorname = authorname;
	}
	public String getBookcategory() {
		return bookcategory;
	}
	public void setBookcategory(String bookcategory) {
		this.bookcategory = bookcategory;
	}
	public String getBookprice() {
		return bookprice;
	}
	public void setBookprice(String bookprice) {
		this.bookprice = bookprice;
	}
	public Date getBookpublishment() {
		return bookpublishment;
	}
	public void setBookpublishment(Date bookpublishment) {
		this.bookpublishment = bookpublishment;
	}
	public booksEntity(int bookid, String bookname, String authorname, String bookcategory, String bookprice,
			Date bookpublishment) {
		super();
		this.bookid = bookid;
		this.bookname = bookname;
		this.authorname = authorname;
		this.bookcategory = bookcategory;
		this.bookprice = bookprice;
		this.bookpublishment = bookpublishment;
	}
	public booksEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
}