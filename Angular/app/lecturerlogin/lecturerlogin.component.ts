import { LectureService } from './../Services/lecture.service';
import { StudentService } from './../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

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
  userName: any;
  password:any;
  alllecture:any=[];
  name:any;
  number:any;
  email:any;
  id: any;
  fees: any;
  result:any;
  address:any;
  semester:any;
  attendance: any;



  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private auth:AuthService,
  private lectureService:LectureService,
  private studentService:StudentService
    ) {​​​​​​​​}​​​​​​​

  ngOnInit() {
    this.lectureService.getAlllecture().subscribe(r=>{
      this.alllecture=r;
      console.log(r);
    }
    )
  }

      loginlecture(){
        this.lectureService.getAlllecture().subscribe(r=>{
          this.alllecture=r;
          console.log("credentials",this.userName,this.password)
          this.alllecture.
          forEach((lecture: { id:any; name: any; password: any; role:any}) => {
            if(lecture.name==this.userName && lecture.password==this.password ){
              this.auth.setAuth();
              this.auth.storeUser(lecture.id,lecture.role);
              this.router.navigate(['/lecture']);
            }
          });
        })

      }




      insertStudent(){
        console.log(this.name);
        var student={
          "name":this.name,
          "email":this.email,
          "contact":this.number,
          "address":this.address,
          "result":this.result,
          "attendance":this.attendance
        }

        this.studentService.addStudent(student).subscribe(result=>{
          console.log(result);
        })



      }

      ​​​​​​​​
    }​​​​​​​​

