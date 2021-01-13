import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/course';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {


  constructor(private adminservice:AdminService,
    private route:ActivatedRoute,
    private router:Router) { }

    id: number;
  course:Course=new Course();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminservice.getCourseById(this.id).subscribe(data => {
      this.course = data;
    }, error => console.log(error));
  }
  

  onSubmit(){
    this.adminservice.updateCourse(this.id, this.course).subscribe( data =>{
      this.router.navigate(['/admin_course-list']);
    }
    , error => console.log(error));

  }

 

}
