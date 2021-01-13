import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate():boolean{
    if(this.authservice.loggedin()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
