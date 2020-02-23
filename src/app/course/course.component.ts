import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../interfaces/course.interface';

import { CdkDrag } from '@angular/cdk/drag-drop';
import { Course } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, ICourse {

  @Input() course: Course;
  whenOffered: string;

  constructor() { }

  ngOnInit() {
      this.whenOffered = '';
      if ("fall" in this.course.semesterOffered) { this.whenOffered += 'F'; }
      if ("winter" in this.course.semesterOffered) { this.whenOffered += 'W'; }
      if ("spring" in this.course.semesterOffered) { this.whenOffered += 'Sp'; }
      if ("summer" in this.course.semesterOffered) { this.whenOffered += 'Su'; }
  }

  getCode() {
      return this.course.courseCode;
  }
  getCredits() {
      return this.course.creditCount;
  }
  isOffered(semesterOrTerm) {
      return this.course.semesterOffered[semesterOrTerm];
  }
  getPrereqs() {
      return this.course.prereqs;
  }


}
