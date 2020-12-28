import { Component, OnInit } from '@angular/core';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
