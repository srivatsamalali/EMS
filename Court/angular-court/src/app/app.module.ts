import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { StudentComponent } from './student/student.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { LecturerloginComponent } from './lecturerlogin/lecturerlogin.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryComponent } from './library/library.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SimpleformComponent,
    ButtonComponent,
    StudentComponent,
    LecturerComponent,
    LecturerloginComponent,
    ContactPageComponent,
    AboutUsComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
