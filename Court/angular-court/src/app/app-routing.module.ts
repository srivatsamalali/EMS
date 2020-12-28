import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'list', component: ListEmployeeComponent, canActivate: [AuthGuard] },
  // { path: 'leaveHistory', component: LeaveHistoryComponent, canActivate: [AuthGuard] },
  // { path: 'applyLeave', component: ApplyLeaveComponent, canActivate: [AuthGuard] },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
  // { path: 'approveReject', component: ApproveRejectComponent, canActivate: [AuthGuard] },
  // { path: 'pendingLeaves', component: PendingLeavesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
