import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  headers=new HttpHeaders({
    'Content-Type':'application/json'
  })

  constructor(private http:HttpClient) { }

  getStudent(id: number){
    return this.http.get("http://localhost:8942/api/student/"+id)
  }

  addStudent(Student:object){
    return this.http.post("http://localhost:8942/api/stud",Student);
  }

  getAllStudents(){
    return this.http.get("http://localhost:8942/api/student");
  }

  editStudent(id: number,body:any){
    return this.http.put("http://localhost:8942/api/student/"+id,body);
  }

}
