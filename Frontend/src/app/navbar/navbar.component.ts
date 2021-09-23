import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
   localStorage.removeItem("token1");
   localStorage.removeItem("token");
   Swal.fire({
    title: 'Success',
    text: 'Logout Successfully',
    icon: 'success',
    confirmButtonText: 'OK'
  })
  
   this.router.navigate(['/']);
  }
}
