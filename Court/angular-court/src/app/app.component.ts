import { Router, RouterModule } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(public auth:AuthService,
    private route:Router) {}

  ngOnInit(): void {
  //  throw new Error('Method not implemented.');
  }

  title = 'angular-court';

  userLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('student');
    this.auth.unsetAuth();
    this.route.navigate(['/']);
  }
}

