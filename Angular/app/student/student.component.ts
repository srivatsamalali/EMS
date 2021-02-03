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



   ngOnInit(): void {


    const id = JSON.parse(localStorage.getItem('user') || '{}');


    this.getData();
    this.getStudent(id);
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


