import { StudentService } from './../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: any;

  fakeData: Case[] = [];
  constructor(private dataService:FakedataService,
    private studentService: StudentService) { }

   b=localStorage.getItem('student');
  ngOnInit(): void {
    this.getData();
    this.getStudent();
  }

  getData() {
  this.fakeData=this.dataService.fakedata();
  console.log(this.fakeData)
  }

  getStudent(id: number){
    this.studentService.getStudent(id).subscribe(result=>{
      console.log(result);
      this.student=result;
    })
  }

}


