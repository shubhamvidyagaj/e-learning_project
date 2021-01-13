import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private Http:HttpClient) { }
  baseURL="http://localhost:8080/api";

  public loginUser(user:Student):Observable<any>{
      return this.Http.post<any>(this.baseURL+"/login",user);
  }

  public registerUser(user:Student):Observable<any>{
    return this.Http.post<any>(this.baseURL+"/register",user);
} 


}
