import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http:HttpClient,private router:Router) { }
  newCourse(items:any){
    // console.log(items);
    return this.http.post("http://localhost:3000/course/add",{"course":items})
    .subscribe(
      err=>{
        console.log(err);
      }
    )
  }

  getCourse(){
    return this.http.get("http://localhost:3000/course")
  }
  sendmailto(items:any){
    
    return this.http.post('http://localhost:3000/students/sendmail',{"course":items})
     
  }
}
