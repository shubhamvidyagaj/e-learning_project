import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate():boolean{
    if(this.authservice.rolecheack()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
