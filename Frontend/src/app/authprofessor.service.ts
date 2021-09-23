import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthprofessorService {
  professor={
    email:'',
  password:''}

  constructor(private http:HttpClient) { }

  
  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/professor/signup",{"professor":item})
   
  }

  loginUser(user:any)
  {
    this.professor=user;
    return this.http.post<any>('http://localhost:3000/professor/login', user)
  }

  getprofile(){

    return this.http.get('http://localhost:3000/professor/profile/'+this.professor.email)
  }

 
}
