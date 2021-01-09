package com.info;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/lec")
public class lectureController {
	
	@Autowired
	lectureService service;
	
	@GetMapping("/lecture")
	public List<lecture> getAlllecture() {
		List<lecture> bk = service.getAlllecture();
		return bk;

	}

}
