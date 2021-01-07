package com.info;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository repo;
	
	
	  public List<Student> getAllStudent() { 
	List<Student> bk = repo.findAll();
	  
	  return bk;
	  
	  }
	  
	  
	  
	 
	public Optional<Student> getStudent(int Id) { 
		Optional<Student> stu=repo.findById(Id);
		return stu;
	}

	
	
	
	   public String update(Student student, int id) {
		  String msg=" ";
		  Optional<Student> s=repo.findById(id); 
		  if(s.isPresent()) {
		  repo.save(student);
		  msg="Updated";
		  } 
		  else { 
		  msg="Data cannot be updated."; 
		  }
		  return msg;
		  
		  } 
	 
	
	
	  public void insert(Student student) { 
		
		  repo.save(student); 
	  }
	  
	  
	  public String delete(Student student,int id) {
	  
	  Optional<Student> s=repo.findById(id);
	  
	  repo.deleteById(id); return "Deleted";
	  
	  
	  }
	 
	 
}
