import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentsform',
  templateUrl: './studentsform.component.html',
  styleUrls: ['./studentsform.component.css']
})
export class StudentsformComponent implements OnInit {
course:any=[]

studentdata:any={
name:'',
lastname:'',
qulification:'',
course:'',
address:'',
dob:''
}
  constructor(private service:ProfessorService, private student:StudentService, private router:Router) { }


  ngOnInit(): void {
    this.service.getCourse().subscribe(data=>{
      this.course=data;
    })
  }

  apply(){
    this.student.applyCourse(this.studentdata);
    Swal.fire({
      title: 'Success',
      text: 'Wait Professor Response',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['/courses'])
  }
}
