import { Component, OnInit } from '@angular/core';
import { AuthprofessorService } from '../authprofessor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-professorsignup',
  templateUrl: './professorsignup.component.html',
  styleUrls: ['./professorsignup.component.css']
})
export class ProfessorsignupComponent implements OnInit {

  professor={
    uname:'',
    email:'',
    password:'',
    experience:'',
    qualification:'',
  repeatpassword:""
}

  message="";

  constructor(private auth:AuthprofessorService, private router:Router) { }

  ngOnInit(): void {
  }

  AddUser()
  { 
    if(this.professor.password==this.professor.repeatpassword){   
    this.auth.newUser(this.professor)
    .subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: 'Successfully Logged',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['professor'])
        
      },
      err => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'Email already exist',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        
      }) 
       
    
    }else{
      this.message="Password is incorrect"
    }
  }
}
