import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/course';
import { SyllabusService } from 'src/app/service/syllabus.service';
import { Syllabus } from 'src/app/syllabus';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  id:number;
  syllabus:Syllabus[];
  course:Course;
  constructor(private route:ActivatedRoute,private router:Router,private syllabusservice:SyllabusService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.syllabusservice.getSelectedCourseSyllabus(this.id).subscribe(data=>{
      this.syllabus=data;
      this.course=this.syllabus[0].selectedCourse;
      //console.log(this.course);
    })
  }

  onClicks(){
    this.router.navigate(['/student_selectedCourse-list']);
  }

}
