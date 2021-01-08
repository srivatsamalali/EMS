import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './student.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean=false;

  constructor(private studentService:StudentService,
    private http:HttpClient,
    private route:Router) { }

    setAuth(){
      this.isAuth=true;
    }
    loginStudent(){
      return this.isAuth;
    }

    storeStudent(student:any){
      localStorage.setItem('student',JSON.stringify(student))
    }

}
