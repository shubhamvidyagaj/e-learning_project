import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/course';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent implements OnInit {

  constructor(private studentservice:StudentService,private router:Router) { }
  courses:Course[];
  ngOnInit(): void {
    this.getAllSelectedCourses();
  }
  one:string="assets/is.jpg";

  private getAllSelectedCourses(){
    this.studentservice.getSelectedCourse().subscribe(data=>{
       this.courses=data;
    })

  }

  viewCourse(id){
    this.router.navigate(['view_course-details',id]);
  }

}
