import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elearn:string="assets/elearn.jpg";
  one:string="assets/1.jpg";
  two:string="assets/2.jpg";
  three:string="assets/3.jpg";
 

}
