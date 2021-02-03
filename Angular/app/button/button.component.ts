import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(
    private router: Router) { }
 // b = JSON.parse(localStorage.getItem('currentUser'));
  getroute(): void {
    this.router.navigate(['/login']);
  }
  getroute1(): void {
    this.router.navigate(['/simpleform']);
  }
  getroute2(): void {
    this.router.navigate(['/leclogin']);
  }

  ngOnInit(): void {
  }

}
