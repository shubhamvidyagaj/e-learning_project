import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/course';
import { Mapping } from 'src/app/mapping';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-global-course',
  templateUrl: './global-course.component.html',
  styleUrls: ['./global-course.component.css']
})
export class GlobalCourseComponent implements OnInit {

  courses:Course[];
  Obj:Mapping=new Mapping();
  constructor(private adminservice:AdminService,private router:Router,
    private authservice:AuthService,private studentservice:StudentService) { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  one:string="assets/is.jpg";

   private getAllCourses(){
    this.adminservice.getCourseList().subscribe(data=>{
      this.courses=data;
      console.log(this.courses);
    })

  }

  selectCourse(id:number){
    
    this.Obj.student_id=parseInt(this.authservice.getId());
    this.Obj.course_id=id;
    
    this.studentservice.mapCourse_Student(this.Obj).subscribe(data=>{
      this.router.navigate(['/payment']);
     // this.router.navigate(['/student_selectedCourse-list']);
    },err=>{console.log(err)});
    
  }


}
