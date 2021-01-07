import { StudentService } from './../Services/student.service';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  name:any;
  number:any;
  email:any;
  password:any;

  constructor(private http:HttpClient,
    private studentService: StudentService) { }

  ngOnInit(): void {

  }


  insertStudent(){
    console.log(this.name);
    var student={
      "name":this.name,
      "email":this.email,
      "contact":this.number,
      "password":this.password
    }

    this.studentService.addStudent(student).subscribe(result=>{
      console.log(result);
    })



  }

}
