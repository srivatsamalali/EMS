
import {​​​​​​​ Component, OnInit }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ Router, ActivatedRoute }​​​​​​​​ from'@angular/router';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';

@Component({​​​​​​​​
templateUrl:'login.component.html',
styleUrls: ['login.component.css']
}​​​​​​​​)

export class LoginComponent implements OnInit {​​​​​​​​
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
  ) {​​​​​​​​}​​​​​​​​


// ngOnInit() {​​​​​​​​

//   this.loginForm = this.formBuilder.group({
//     studUsername: ['', [Validators.required, Validators.pattern('^[0-9]*$')]

//   }​​​​​​​);
// }



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
    ​​​​​​this.router.navigate(['/student']);
    }​​​​​​​​
  }​​​​​​​​



