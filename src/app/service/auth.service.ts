import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;

  constructor(private rservice:RegistrationService,
    private router:Router) { }


    /*login(user:Student){
      this.rservice.loginUser(user).subscribe(data=>{
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('role',data.role);
        sessionStorage.setItem('id',data.id);
        if(data.role=="Admin"){
          this.router.navigate(['/admin_course-list']);
        }else{
          this.router.navigate(['/student_course-list']);
        }
        
    },err=>{return err;});
  }*/

  loggedin(){
    return !!sessionStorage.getItem('username');
  }

  rolecheack(){
    if(sessionStorage.getItem('role')=="Admin"){
        return true;
    }else{
      return false;
    }
  }

  roleUser(){
    if(sessionStorage.getItem('role')=="student"){
      return true;
    }else{
      return false;
    }
  }

  getId(){
    return sessionStorage.getItem('id');
  }


}
