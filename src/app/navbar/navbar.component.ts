import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
  logoimage:string="assets/logo.jpg";
 
  isLogin(){
    if(this.authservice.loggedin()){
      return true;
    }else{
      return false;
    }

  }

  roleUser(){
    if(this.authservice.roleUser()){
      return true;
    }else{
      return false;
    }

  }


}
