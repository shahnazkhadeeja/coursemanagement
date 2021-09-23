import { Component, OnInit } from '@angular/core';
import { AuthprofessorService } from '../authprofessor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-professorlogin',
  templateUrl: './professorlogin.component.html',
  styleUrls: ['./professorlogin.component.css']
})
export class ProfessorloginComponent implements OnInit {

  professor={
    email:'',
  password:''}
 
  constructor(private auth:AuthprofessorService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this.auth.loginUser(this.professor)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        Swal.fire({
          title: 'Success',
          text: 'Successfully Logged',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/courses'])
        
      },
      err => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'Enter Valid Email And Password',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['professor'])
      }) 
  }

}
