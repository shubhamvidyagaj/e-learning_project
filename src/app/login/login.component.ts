import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { AuthService } from '../service/auth.service';
import { Student } from '../student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:Student=new Student();
  errmsg="";
  result:any;
  constructor(private auth:AuthService,
    private router:Router,private registerservice:RegistrationService) { }

  ngOnInit(): void {
  }


  loginUser(){
      this.registerservice.loginUser(this.user).subscribe(data=>{
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role',data.role);
        sessionStorage.setItem('id',data.id);
        if(data.role=="Admin"){
          this.router.navigate(['/admin_course-list']);
        }else{
          this.router.navigate(['/student_course-list']);
        }
      },err=>{console.log("error occured")
        this.errmsg="Wrong credentials enter correct username and password";
    });
  }
  

 /*loginUser(){
     this.auth.login(this.user)
              
 }*/


  gotoregister(){
    this.router.navigate(["/register"]);
  }

}
