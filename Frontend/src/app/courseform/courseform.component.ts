import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  course:any={
    title:"",
    description:"",
    duration:"",
    startdate:"",
    enddate:""
  }

  constructor(private service:ProfessorService,private router:Router) { }

  ngOnInit(): void {
  }

  newcourse(){
    this.service.newCourse(this.course);
    Swal.fire({
      title: 'Added',
      text: 'Successfully Added',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['/courses'])
  }
}
