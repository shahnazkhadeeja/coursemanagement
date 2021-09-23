import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentslogin',
  templateUrl: './studentslogin.component.html',
  styleUrls: ['./studentslogin.component.css']
})
export class StudentsloginComponent implements OnInit {

  student={
    email:'',
  password:''}

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this.auth.loginUser(this.student)
    .subscribe(
      res => {
        localStorage.setItem('token1', res.token)
       
        Swal.fire({
          title: 'Success',
          text: 'Successfully Logged',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/'])
      },
      err => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'Enter Valid Email And Password',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['students'])
      }) 
  }
}
