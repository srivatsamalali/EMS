import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Case } from '../Services/fakedata';
import { FakedataService } from '../Services/fakedata.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fakeData: Case[] = [];

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error!: string;
  studUsername!: string;
  studPassword!: string;


  constructor(private dataService:FakedataService ,
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,) { }

  getroute(): void {
    this.router.navigate(['/login']);
  }
  getroute1(): void {
    this.router.navigate(['/simpleform']);
  }
  getroute2(): void {
    this.router.navigate(['/leclogin']);
  }


  ngOnInit(): void {
    this.getData();

    this.loginForm = this.formBuilder.group({
      studUsername: ['', [Validators.required, Validators.pattern('^[0-9]*$')]
      ]

    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  getData() {

this.fakeData=this.dataService.fakedata();
console.log(this.fakeData)
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
get f() { return this.loginForm.controls; }

onSubmit() {​​​​​​​​
this.submitted = true;
    ​​​​​​this.router.navigate(['/student']);
    }​​​​​​​​
  }​​​​​​​​

