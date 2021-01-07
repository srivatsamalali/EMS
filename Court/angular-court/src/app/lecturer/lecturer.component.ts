import { StudentService } from './../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {
  name:any;
  number:any;
  email:any;
  password:any;
  id: any;

  fakeData: Case[] = [];
  studentsList: any=[];
  constructor(private dataService:FakedataService,
    private studentService:StudentService) { }

  ngOnInit(): void {
    this.getData();
    this.getall();
  }

  getData() {

this.fakeData=this.dataService.fakedata();
console.log(this.fakeData)
  }

  getall(){
    this.studentService.getAllStudents().subscribe(result=>{
      this.studentsList=result;
      console.log(this.studentsList);
    })
  }
  editDetails(id:any,name:any,email:any){
    this.id=id;
    this.name=name;
    this.email=email;
  }

  editStudent(){
    var studentDetails={
      "name": this.name,
      "email": this.email
  }
    this.studentService.editStudent(this.id,studentDetails).subscribe(result=>{
      console.log(result);
    })
  }
}
