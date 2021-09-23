import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  student={
    email:'',
  password:''}

  newUser(item:any)
  {   

    return this.http.post("http://localhost:3000/users/signup",{"student":item})
   
  }

  loginUser(user:any)
  {
    this.student=user;
    return this.http.post<any>('http://localhost:3000/users/login', user)
  }

  getstudentprofile(){
    return this.http.get('http://localhost:3000/users/studentprofile/'+this.student.email)
  }
  StudentloggedIn(){
    return !!localStorage.getItem('token1')
  }

  ProfessorloggedIn(){
    return !!localStorage.getItem('token')
  }
}
