import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mapping } from '../mapping';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private Http:HttpClient,private auth:AuthService) { }

  baseURL="http://localhost:8080/api/student_course";
  id:number;

  public mapCourse_Student(mapObj:Mapping):Observable<any>{
    //console.log(mapObj);
      return this.Http.put(this.baseURL,mapObj,{responseType: 'text'});
  }

  public getSelectedCourse():Observable<any>{
     this.id=parseInt(this.auth.getId());
      return this.Http.get(this.baseURL+"/"+this.id);
  }

}
