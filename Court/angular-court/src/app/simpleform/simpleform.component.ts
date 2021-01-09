import { StudentService } from './../Services/student.service';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules, ThrowStmt } from '@angular/compiler';
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
  attendance:any;
  fees:any;
  result:any;
  semester:any;
  address:any;
  role:any;

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
      "password":this.password,
      "fees":this.fees,
      "address":this.address,
      "attendance":this.attendance,
      "semester":this.semester,
      "result":this.result,
      "role":this.role="student"

    }

    this.studentService.addStudent(student).subscribe(result=>{
      console.log(result);
    })



  }

}
