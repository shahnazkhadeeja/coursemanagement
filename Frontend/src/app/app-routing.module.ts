import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsloginComponent } from './studentslogin/studentslogin.component';
import { ProfessorloginComponent } from './professorlogin/professorlogin.component';
import { HomeComponent } from './home/home.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { ProfessorsignupComponent } from './professorsignup/professorsignup.component';
import { CourseformComponent } from './courseform/courseform.component';
import { StudentsformComponent } from './studentsform/studentsform.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"students",  component:StudentsloginComponent},
  {path:"studentsignup", component:StudentsignupComponent},
  {path:"professor", component:ProfessorloginComponent},
  {path:"professorsignup",component:ProfessorsignupComponent},
  {path:"profile",component:ProfileComponent},
  {path:"professorprofile",component:ProfessorprofileComponent},
  {path:"courseform",
  canActivate:[AuthGuard],
  component:CourseformComponent},
  {path:"apply",component:StudentsformComponent},
  {path:"studentlist",
  canActivate:[AuthGuard],
  component:StudentslistComponent},
  {path:"courses",component:CoursedetailsComponent},
  {path:"accepted",
  canActivate:[AuthGuard],
  component:AcceptedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
