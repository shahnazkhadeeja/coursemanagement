import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  student:any=[]
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getstudentprofile().subscribe(data=>{
      console.log(data)
      this.student=data;
    })
  }

}
