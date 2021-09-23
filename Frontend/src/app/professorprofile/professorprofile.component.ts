import { Component, OnInit } from '@angular/core';
import { AuthprofessorService } from '../authprofessor.service';

@Component({
  selector: 'app-professorprofile',
  templateUrl: './professorprofile.component.html',
  styleUrls: ['./professorprofile.component.css']
})
export class ProfessorprofileComponent implements OnInit {
professor:any=[]
  constructor(public auth:AuthprofessorService) { }

  ngOnInit(): void {
    this.auth.getprofile().subscribe(
      data=>{
        this.professor=data
      }
    )
  }

}
