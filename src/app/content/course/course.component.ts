import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import{Course} from 'src/app/models/course.model'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  get course() :   Course[] {
    return this.layoutService.course;
  
  }
  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Custom"},
      {id: 1, name: "Lock Last"},
      {id: 2, name: "Unlock First"},
      {id: 3, name: "Sequential"}
  ];

 
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }
  SubmitItem(myCourseForm:HTMLInputElement) {
    this.layoutService.addCourses(myCourseForm.value);
    console.log(JSON.stringify(myCourseForm.value));
    localStorage.setItem("CourseItem",JSON.stringify(myCourseForm.value));
 // return JSON.stringify(this.model);
  
  
 }
 selected(){
  console.log(this.selectedLevel.name)
}

}
