import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'Java', category: 'back-end'}
  ]
  displayedColumns = ['name', 'category']

}
