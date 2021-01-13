import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private Http:HttpClient) { }
  baseUrl="http://localhost:8080/api/courses";

  getCourseList():Observable<Course[]>{
    return this.Http.get<Course[]>(this.baseUrl);
}

createCourse(course:Course):Observable<any>{
   return this.Http.post(this.baseUrl,course);
}

updateCourse(id: number, course: Course): Observable<any>{
  return this.Http.put(this.baseUrl+"/"+id, course);
}

deleteCourse(id:number):Observable<any>{
  return this.Http.delete(this.baseUrl+"/"+id);
}

getCourseById(id:number):Observable<Course>{
  return this.Http.get<Course>(this.baseUrl+"/"+id);
}




}
