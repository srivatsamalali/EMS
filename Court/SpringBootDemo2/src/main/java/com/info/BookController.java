package com.info;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "*")
@RestController
public class BookController {

	@Autowired
	BookService service;
	@RequestMapping("/book")
	public List<Book> getAllBooks()
	{
		List<Book> bk = service.getAllBooks();
		return bk;
		
	}
	@PostMapping("/book")
    public String insertData(@RequestBody Book book)
    {
        service.insert(book);
    return "Data inserted";    
    }
	
	@GetMapping("/book/{bid}")
    public Optional<Book> getShop(@PathVariable("bid")int bid) 
    {
        Optional<Book> shop = service.getBook(bid);
        return shop;
        
    }
	@PutMapping("/book/{bid}")
	public String updateShop(@RequestBody Book book,@PathVariable int bid)
	{
		String msg = service.update(book, bid);
		return msg;
	}
	
	  @DeleteMapping("/book/{bid}")
	     public int delete(@PathVariable int bid)
	     {
	         int msg = service.delete(bid);
	         return msg;
	     }
}
	
	

