import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  student={
    uname:'',
    email:'',
  password:'',
  repeatpassword:""}

  
    message="";
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  AddUser()
  { 
    if(this.student.password==this.student.repeatpassword){   
    this.auth.newUser(this.student).subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: 'Successfully Logged',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/students']);
        
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
