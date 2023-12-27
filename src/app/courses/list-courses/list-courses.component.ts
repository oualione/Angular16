import { Component } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  showForm : boolean = false;
  editForm : boolean = false;

  myCourse : Course = {
    id : uuidv4(),
    name : '',
    price : 0
  }

  courses : Course[] = [
    {
      id : '1',
      name : 'Learn Angular 16',
      price : 100
    },
    {
      id : '2',
      name : 'Learn React JS',
      price : 150
    },
    {
      id : '3',
      name : 'Learn Node JS',
      price : 300
    },
  ];


  toggleForm(){
    this.initForm();
    this.editForm = false;
    this.showForm = !this.showForm;
  }

  initForm(){
     this.myCourse = {
    name : '',
    price : 0
  }
  }

  addCourse(){
    
    this.courses.push(this.myCourse);
    console.log(this.myCourse);
    this.initForm();

  }

  deleteCourse(course : Course) {
    let indexToDelete = this.courses.indexOf(course);
    this.courses.splice(indexToDelete, 1);
  }

  editCourse(course : Course){
    this.showForm = true;
    this.myCourse = course;
    this.editForm = true;

  }

  updateCourse(){
     this.showForm = false;
     this.initForm();
  }

}
