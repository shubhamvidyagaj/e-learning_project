import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/course';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  
  courses:Course[];
  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
      this.getAllCourses();
  }

  ngOnChanges() {
    this.getAllCourses();
  }

  private getAllCourses(){
    this.adminservice.getCourseList().subscribe(data=>{
      this.courses=data;
      console.log(this.courses);
    })

  }

  onDelete(id){
    this.adminservice.deleteCourse(id).subscribe(data=>{
      this.getAllCourses();
    })
  }


  onUpdate(id:number){
    this.router.navigate(['admin_course-update',id]);
}

onAddSyllabus(id){
  this.router.navigate(['syllabus',id]);
}

}
