import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { HandleLeaveComponent } from './handle-leave/handle-leave.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { VisitorsLogComponent } from './visitors-log/visitors-log.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

const myRoute:Routes = [
  {
    path: "",
    component: AdminLoginComponent
  },
  {
    path:"addEmployee",
    component: AddEmployeeComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path: "editEmployee",
    component: EditEmployeeComponent
  },
  {
    path: "addSecurity",
    component: AddSecurityComponent
  },
  {
    path:"viewLeaves",
    component:HandleLeaveComponent
  },
  {
    path:"securityLogin",
    component:SecurityLoginComponent
  },
  {
    path:"viewSecurityProfile",
    component: ViewProfileComponent
  },
  {
    path:"employeeLog",
    component: CreateLogComponent
  },
  {
    path:"visitorLog",
    component: VisitorsLogComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    AdminNavBarComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    AddSecurityComponent,
    HandleLeaveComponent,
    SecurityLoginComponent,
    ViewProfileComponent,
    SecurityNavComponent,
    CreateLogComponent,
    VisitorsLogComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
