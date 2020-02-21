import { Component, OnInit, Input } from '@angular/core';

import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: any;
  whenOffered: string;

  constructor() { }

  ngOnInit() {
      this.whenOffered = '';
      if (this.course.offered.fall) { this.whenOffered += 'F'; }
      if (this.course.offered.winter) { this.whenOffered += 'W'; }
      if (this.course.offered.spring) { this.whenOffered += 'Sp'; }
      if (this.course.offered.summer) { this.whenOffered += 'Su'; }
  }


}
