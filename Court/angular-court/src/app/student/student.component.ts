import { Component, OnInit } from '@angular/core';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  fakeData: Case[] = [];
  constructor(private dataService:FakedataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    
this.fakeData=this.dataService.fakedata();
console.log(this.fakeData)
  }
}


