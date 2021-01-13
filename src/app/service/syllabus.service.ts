import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Syllabus } from '../syllabus';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  baseURL="http://localhost:8080/api/syllabus";

  constructor(private Http:HttpClient) { }


  public getSelectedCourseSyllabus(id:number):Observable<any>{
     return this.Http.get(this.baseURL+"/"+id);
 }

  public addSelectedCourseSyllabus(id:number,syllabus:Syllabus):Observable<any>{
    return this.Http.post(this.baseURL+"/"+id,syllabus);
  }
}
