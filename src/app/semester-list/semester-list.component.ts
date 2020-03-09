import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDragExit, moveItemInArray, CdkDragEnter, transferArrayItem} from '@angular/cdk/drag-drop';
import { Semester } from '../models/semester';
import { Course } from '../models/course';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css']
})
export class SemesterListComponent implements OnInit {
  @Input() semester: Semester
  connectedLists = ['GEList', 'major-electiveList',
                    'GE-major-requiredList', 'major-requiredList']

  constructor() { }

  ngOnInit() {
    console.log(this.semester.courses)
  }

  drop(event: CdkDragDrop<Course[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      console.log('dropped', event)
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // this.semester.creditCount +=  this.semester.courses[event.currentIndex].creditCount
    }
  }

  exit(event: CdkDragExit<Course>) {
    console.log('exited', event.item.data)
    this.semester.creditCount -=  event.item.data.creditCount
  }

  entered(event: CdkDragEnter<Course>) {
    console.log('entered', event.item.data)
    this.semester.creditCount +=  event.item.data.creditCount
  }
}
