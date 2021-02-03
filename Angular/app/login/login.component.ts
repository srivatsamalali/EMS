import { AuthService } from './../Services/auth.service';
import { StudentService } from './../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error!: string;
  spinner: boolean = false;
  studUsername!: string;
  studPassword!: string;
  userName: any;
  password: any;
  allStudents: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    public auth: AuthService
  ) {}
  ngOnInit() {
  }

  onSubmit(): void {
    this.loginStudent(this.userName, this.password);
    // this.router.navigate(['/student']);
  }

  onRegister(): void {
    this.router.navigate(['/simpleform']);
  }

  onLecture(): void {
    this.router.navigate(['/lecture']);
  }

  loginStudent(username: any, password: any) {
    this.spinner=true;
    var flag=0;
    this.studentService.getAllStudents().subscribe((r) => {
      this.allStudents = r;
      this.allStudents.forEach(
        (student: { id: any; name: any; password: any; role: any }) => {
          if (student.name == username && student.password == password) {
            flag=1;
            this.auth.setAuth();
            this.auth.storeUser(student.id, student.role);
            this.router.navigate(['/student']);
            this.spinner=false;
          }

        }
      );
      this.spinner=false;
    });

  }
}
