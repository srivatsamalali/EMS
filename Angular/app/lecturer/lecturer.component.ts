import { StudentService } from './../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css'],
})
export class LecturerComponent implements OnInit {
  name: any;
  number: any;
  email: any;
  password: any;
  id: any;
  fees: any;
  result: any;
  role:any;
  address: any;
  semester: any;

  fakeData: Case[] = [];
  studentsList: any = [];
  constructor(
    private dataService: FakedataService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getall();
    // this.role=JSON.parse(localStorage.getItem('role'));
  }

  getData() {
    this.fakeData = this.dataService.fakedata();
    console.log(this.fakeData);
  }

  getall() {
    this.studentService.getAllStudents().subscribe((result) => {
      this.studentsList = result;
      console.log(this.studentsList);
    });
  }
  editDetails(
    id: any,
    name: any,
    email: any,
    semester: any,
    fees: any,
    result: any,
    address: any,
    contact: any
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.number = contact;
    this.address = address;
    this.semester = semester;
    this.fees = fees;
    this.result = result;
  }

  editStudent() {
    var studentDetails = {
      name: this.name,
      email: this.email,
      result: this.result,
      fees: this.fees,
      semester: this.semester,
      contact: this.number,
      address: this.address,
    };
    this.studentService
      .editStudent(this.id, studentDetails)
      .subscribe((result) => {
        console.log(result);
      });
    this.delete(this.id);
  }

  delete(id: any) {
    this.studentService.delete(id).subscribe((r) => {
      // console.log(r);
      this.getall();
    });
  }
}
