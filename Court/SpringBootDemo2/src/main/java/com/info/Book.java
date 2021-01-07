package com.info;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Book {
	
	@Id
	private int bid;
	private String bname;
	private String author;
	private int price;
	private String description;
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getAuthor() {
		return author;
	}
	public int getBid() {
		return bid;
	}
	public String getBname() {
		return bname;
	}
	public int getPrice() {
		return price;
	}
	//@Override
	//public String toString() {
		//return "Book [bid=" + bid + ", bname=" + bname + ", author=" + author + ", price=" + price + "]";
	//}
	
	//public Book(int bid, String bname, String author, int price) {
		//super();
		//this.bid = bid;
		//this.bname = bname;
		//this.author = author;
		//this.price = price;
	//}
	@Override
	public String toString() {
		return "Book [bid=" + bid + ", bname=" + bname + ", author=" + author + ", price=" + price + ", description="
				+ description + "]";
	}
	
	public Book(int bid, String bname, String author, int price, String description) {
		super();
		this.bid = bid;
		this.bname = bname;
		this.author = author;
		this.price = price;
		this.description = description;
	}
	public Book() {
		// TODO Auto-generated constructor stub
	}
	

}