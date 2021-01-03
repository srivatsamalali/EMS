
import { LecturerloginComponent } from './lecturerlogin/lecturerlogin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { StudentComponent } from './student/student.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LibraryComponent } from './library/library.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';


const routes: Routes = [

  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'list', component: ListEmployeeComponent, canActivate: [AuthGuard] },
  // { path: 'leaveHistory', component: LeaveHistoryComponent, canActivate: [AuthGuard] },
  // { path: 'applyLeave', component: ApplyLeaveComponent, canActivate: [AuthGuard] },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
  // { path: 'approveReject', component: ApproveRejectComponent, canActivate: [AuthGuard] },
  // { path: 'pendingLeaves', component: PendingLeavesComponent, canActivate: [AuthGuard] },
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: ButtonComponent },
  { path: 'simpleform', component: SimpleformComponent},
  { path: 'student', component: StudentComponent},
  { path: 'lecture', component: LecturerComponent},
  { path: 'leclogin', component: LecturerloginComponent},
  { path: 'ContactPage', component: ContactPageComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'activity', component: ActivityFormComponent},



  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
