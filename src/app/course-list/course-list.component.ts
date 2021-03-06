import { Component, OnInit, Inject } from '@angular/core';
import { DATA_SERVICE } from '../interfaces/tokens/data-service-interface.token';
import { IDataService } from '../interfaces/services/data-service.interface';
import { Course } from '../models/course';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  readonly types = ["GE", "major-elective", "GE-major-required", "major-required"];
  courses: Array<Course>;
  courses2: Array<Course>;
  coursesByType: Array<Array<Course>> = [];
  currentlyOpenedItemIndex = -1;
  connectedLists = ['semester1', 'semester2', 'semester3','semester4','semester5']
  type: Number;

  constructor( public dialog: MatDialog, @Inject(DATA_SERVICE) private dataService: IDataService) { }

  async ngOnInit() {
    await this.arrangeCoursesByType(1);
    this.type = 1;
  }

  async getCourses(major) {
    if(major == 1) {
      // this.tempObject = JSON.parse(data);
      // this.courses = this.tempObject.program.courses;
      this.courses = await this.dataService.fetchCourseData("1")
    }
    else {
      // this.tempObject = JSON.parse(data2);
      // this.courses = this.tempObject.program.courses;
      this.courses = await this.dataService.fetchCourseData("2")
    }
  }

  async arrangeCoursesByType(major) {
    await this.getCourses(major);

    this.coursesByType = new Array;
    for(var j = 0; j < this.types.length; j++) {
      var tempArray = new Array<Course>();
      var i = 0;
      while (i < this.courses.length) {
        if(this.courses[i].type == this.types[j]) {
          tempArray.push(this.courses[i]);
        }
        i++;
      }
      this.coursesByType.push(tempArray);
    }
  }

  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex) {
    if(this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }

  drop(event: CdkDragDrop<Course[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  onClickCourse(course) {
    console.log(course);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '250px',
      data: {type: this.type}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.arrangeCoursesByType(result);
      console.log('The dialog was closed = ' + result);
    });
  }
}
