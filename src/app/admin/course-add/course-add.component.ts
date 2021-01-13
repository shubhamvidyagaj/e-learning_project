import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/course';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course:Course=new Course();
  constructor(private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminservice.createCourse(this.course).subscribe(data=>{
      this.router.navigate(['/admin_course-list']);
    },err=>{
      console.log(err);
    });


  

  }

}
