package com.info;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
	
	@Autowired
	BookRepository repo;
	
	public List<Book> getAllBooks()
	{
		List<Book> bk = repo.findAll();
		
		return bk;
		
	}
	public void insert(Book book)
    {
        repo.save(book);
    }
    public Optional<Book> getBook(int bid){
    	Optional<Book> book = repo.findById(bid);
    	return book;
    }
    public String update(Book book,int bid)
    {
    	String msg=" ";
    	Optional<Book> b = repo.findById(bid);
    	if(b.isPresent())
    	{
    		repo.save(book);
    		msg =" data updated";
    	}
    	else
    	{
    		msg =" data not updated";
    	}
    	return msg;
    }
    public int delete(int bid)
    {
		Optional<Book> s = repo.findById(bid);

		repo.deleteById(bid);
		return 1;

    }

}