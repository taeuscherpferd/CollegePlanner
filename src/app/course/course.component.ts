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
      console.log(this.course)
      if (this.course.semesterOffered.fall) { this.whenOffered += 'F'; }
      if (this.course.semesterOffered.winter) { this.whenOffered += 'W'; }
      if (this.course.semesterOffered.spring) { this.whenOffered += 'Sp'; }
      if (this.course.semesterOffered.summer) { this.whenOffered += 'Su'; }
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
