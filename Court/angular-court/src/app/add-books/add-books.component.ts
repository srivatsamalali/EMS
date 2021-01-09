import { Router } from '@angular/router';
import { LibraryService } from './../Services/library.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  bname:any;
  author:any;
  description:any;
  addbook:any=[];
  price:any;

  constructor(private libraryService:LibraryService,
    private route:Router) { }

  ngOnInit(): void {
  }
  insertBooks(){
    console.log(this.bname);
    var addbook={
      "name":this.bname,
      "author":this.author,
      "price":this.price="0",
      "description":this.description
    }

    this.libraryService.insertBooks(addbook).subscribe(result=>{
      console.log(result);
      this.route.navigate(["/library"]);
    })
  }

}
