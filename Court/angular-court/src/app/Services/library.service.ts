import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  headers=new HttpHeaders({
    'Content-Type':'application/json'
  })

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("http://localhost:8931/book");
  }

  insertBooks(book:object){
    return this.http.get("http://localhost:8931/book"+book);
  }

  deleteBooks(id:any){
    return this.http.delete("http://localhost:8931/book/"+id);
  }

}
