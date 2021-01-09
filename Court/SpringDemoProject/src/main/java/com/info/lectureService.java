package com.info;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class lectureService {
	
	@Autowired
	lectureRepo repo;
	
	
	public List<lecture> getAlllecture() {
		List<lecture> bk = repo.findAll();
		return bk;

	}


}
