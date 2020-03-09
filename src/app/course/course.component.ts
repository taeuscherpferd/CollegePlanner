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
      if (this.course.offered.fall) { this.whenOffered += 'F'; }
      if (this.course.offered.winter) { this.whenOffered += 'W'; }
      if (this.course.offered.spring) { this.whenOffered += 'Sp'; }
      if (this.course.offered.summer) { this.whenOffered += 'Su'; }
  }

  getCode() {
      return this.course.code;
  }
  getCredits() {
      return this.course.credits;
  }
  isOffered(semesterOrTerm) {
      return this.course.offered[semesterOrTerm];
  }
  getPrereqs() {
      return this.course.prereqs;
  }
}
