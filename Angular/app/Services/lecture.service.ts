import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  headers=new HttpHeaders({
    'Content-Type':'application/json'
  })
  constructor(private http:HttpClient) { }

  getAlllecture(){
    return this.http.get("http://localhost:8942/lec/lecture/")
  }
}
