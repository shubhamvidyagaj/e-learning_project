import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SyllabusService } from 'src/app/service/syllabus.service';
import { Syllabus } from 'src/app/syllabus';

@Component({
  selector: 'app-syllabus-add',
  templateUrl: './syllabus-add.component.html',
  styleUrls: ['./syllabus-add.component.css']
})
export class SyllabusAddComponent implements OnInit {

  syllabus:Syllabus=new Syllabus();
  constructor(private route:ActivatedRoute,private router:Router,private syllabusservice:SyllabusService ) { }
  id:number;
  ngOnInit(): void {
   this.id= this.route.snapshot.params['id']
  }

  onSyllabus(){
    this.syllabusservice.addSelectedCourseSyllabus(this.id,this.syllabus).subscribe(data=>{
      this.router.navigate(['//admin_course-list']);

    })
  }


}
