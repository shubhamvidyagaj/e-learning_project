import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser:Student=new Student();
  errMsg="";

  constructor(private router:Router,
    private service:RegistrationService) { }


  ngOnInit(): void {
  }
  registerUser(){
     this.service.registerUser(this.newUser).subscribe(data=>{
       console.log(data);
       this.errMsg="registration sucess";
       this.router.navigate(["/login"]);
     },error=>{
      console.log(error);
      this.errMsg="registration failed";
      
     });
  }
}
