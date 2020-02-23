import { Component, OnInit, Inject } from '@angular/core';
import { DATA_SERVICE } from '../interfaces/tokens/data-service-interface.token';
import { IDataService } from '../interfaces/services/data-service.interface';
import { Course } from '../models/course';

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
  tempObject: any;
  currentlyOpenedItemIndex = -1;

  constructor( @Inject(DATA_SERVICE) private dataService: IDataService) { }

  async ngOnInit() {
    await this.arrangeCoursesByType(1);
  }

  // extractData() {
  //   var body = this.http.get(endpoint, requestOptions);
  //   console.log(body);
  //   this.tempObject = body;
  //   this.courses2 = this.tempObject.program.courses;
  //   console.log(this.courses2);
  // }

  async getCourses(major) {
    if(major == 1) {
      // this.tempObject = JSON.parse(data);
      // this.courses = this.tempObject.program.courses;
      this.courses = await this.dataService.fetchCourseData("cs")
    }
    else {
      // this.tempObject = JSON.parse(data2);
      // this.courses = this.tempObject.program.courses;
      this.courses = await this.dataService.fetchCourseData("econ")
    }
  }

  async arrangeCoursesByType(major) {
    await this.getCourses(major);
    
    this.coursesByType = new Array;
    // this.types = JSON.parse(this.types);
    for(var j = 0; j < this.types.length; j++) {
      var tempArray = new Array<Course>();
      var i = 0;
      while (i < this.courses.length) {
        if(this.courses[i].courseType == this.types[j]) {
          tempArray.push(this.courses[i]);
        }
        i++;
      }
      this.coursesByType.push(tempArray);
    }
  }

  onClickCS() {
    this.arrangeCoursesByType(1);
  }

  onClickEcon() {
    this.arrangeCoursesByType(2);
  }

  onClickCourse(course) {
    console.log(course);
  }

  setOpened(itemIndex) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex) {
    if(this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }

}



