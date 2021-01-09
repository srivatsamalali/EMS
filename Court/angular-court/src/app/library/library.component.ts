import { LibraryService } from './../Services/library.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  bid: any;
  bname: any;
  author: any;
  price: any;
  description: any;

  bookList: any = [];

  constructor(private libaryService: LibraryService) {}

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.libaryService.getBooks().subscribe((result) => {
      this.bookList = result;
      console.log(this.bookList);
    });
  }

  delete(bid: any) {
    this.libaryService.deleteBooks(bid).subscribe((r) => {
      console.log(r);
      this.getall();
    });
  }
}
