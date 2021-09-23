import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ProfessorService } from '../professor.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {
  studentdata:any=[];
  course:any=[]
 sendmail:any="";
  constructor(public service:StudentService,private professor:ProfessorService) { }

  ngOnInit(): void {
    this.professor.getCourse().subscribe(data=>{
      this.course=data;
    })

    this.service.acceptedstudentlist().subscribe(
      data=>{
       
        this.studentdata=data;
      },
      error=>{
        console.log(error)
      }
    )
  }

mail(){
  if(!this.sendmail){
    Swal.fire({
      title: 'warning',
      text: 'Please select a course',
      icon: 'warning',
      confirmButtonText: 'OK'
    })
  }else{
    this.professor.sendmailto(this.sendmail)
    .subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: 'Mail sent',
          icon: 'success',
          confirmButtonText: 'OK'
        })
       
      },
      err => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'No One Applied this course',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        
      }) 
     
    }    

  }


}
