import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  name: any;
  email: any;
  message: any;
  subject: any;


  constructor() { }

  ngOnInit(): void {
  }

  postContact(){
    var message={
      "name": this.name,
      "email": this.email,
      "subject": this.subject,
      "message": this.message
    }
    console.log(this.name);
  }

}
