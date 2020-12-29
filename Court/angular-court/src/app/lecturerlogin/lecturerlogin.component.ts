import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lecturerlogin',
  templateUrl: './lecturerlogin.component.html',
  styleUrls: ['./lecturerlogin.component.css']
})
export class LecturerloginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error!: string;
  studUsername!: string;
  studPassword!: string;

  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
    ) {​​​​​​​​}​​​​​​​

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      studUsername: ['', [Validators.required, Validators.pattern('^[0-9]*$')]
      ]

    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmit() {​​​​​​​​
  this.submitted = true;
      ​​​​​​this.router.navigate(['/lecture']);
      }​​​​​​​​
    }​​​​​​​​

