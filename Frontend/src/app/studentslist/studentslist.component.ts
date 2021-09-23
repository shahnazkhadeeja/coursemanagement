import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  studentdata:any=[]
  status:any="";
 
  constructor(private service:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.service.appliedstudents().subscribe(
      data=>{
        this.studentdata=data;
      }
    )
  }

  acceptuser(user:any)
  {
    // console.log(user)
    this.service.accept(user).subscribe(
      (res)=>{
        Swal.fire({
          title: 'accepted',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/studentlist'])
      },
      (error)=>
        {
          Swal.fire({
            title: 'Warning',
            text: 'Over the Limit',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
          this.router.navigate(['/studentlist'])
        }
    )
  }

  rejectuser(user:any)
  {
    // console.log(user)
    this.service.reject(user).subscribe(
      (res)=>{
        Swal.fire({
          title: 'Rejected',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'OK'
        }) 
        this.router.navigate(['/studentlist'])
      }
     
    )
  }

}
