import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DataService } from '../services/data.service';
import { DATA_SERVICE } from '../interfaces/tokens/data-service-interface.token';


const headerDict = {
  'Access-Control-Allow-Origins': '*',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};

const endpoint = 'https://cors-anywhere.herokuapp.com/localhost:4000/major/1';

const data = '{"program":{"courses":[{"code":"CS 142","name":"Introduction to Computer Programming","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":false},"prereqs":[]},{"code":"CS 235","name":"Data Structures and Algorithms","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["CS 142"]},{"code":"CS 236","name":"Discrete Structures","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["CS 235"]},{"code":"CS 224","name":"Introduction to Computer Systems","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["CS 142"]},{"code":"CS 240","name":"Advanced Programming Concepts","credits":4,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["CS 236"]},{"code":"CS 252","name":"Introduction to Computational Theory","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":false},"prereqs":["CS 236"]},{"code":"CS 312","name":"Algorithm Design and Analysis","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240","CS 252"]},{"code":"CS 324","name":"Systems Programming","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 224","CS 240"]},{"code":"CS 340","name":"Software Design and Testing","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["CS 240"]},{"code":"CS 404","name":"Ethics and Computers in Society","credits":2,"type":"major-required","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240","CS 316"]},{"code":"MATH 313","name":"Elementary Linear Algebra","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["MATH 112"]},{"code":"MATH 112","name":"Calculus 1","credits":4,"type":"GE-major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"MATH 113","name":"Calculus 2","credits":4,"type":"GE-major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["MATH 112"]},{"code":"PHSCS 121","name":"Introduction to Newtonian Mechanics","credits":3,"type":"GE-major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":false},"prereqs":["MATH 112"]},{"code":"ENGL 316","name":"Technical Communication","credits":3,"type":"GE-major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"STAT 121","name":"Principles of Statistics","credits":3,"type":"GE-major-elective","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["MATH 110"]},{"code":"CS 330","name":"Concepts of Programming Languages","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240"]},{"code":"CS 345","name":"Operating System Design","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["CS 224","CS 240"]},{"code":"CS 355","name":"Interactive Graphics and Image Processing","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240","MATH 313"]},{"code":"CS 418","name":"Bioinformatics","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["CS 240"]},{"code":"CS 428","name":"Software Engineering","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 340"]},{"code":"CS 450","name":"Computer Vision","credits":3,"type":"major-elective","offered":{"fall":false,"winter":true,"spring":false,"summer":false},"prereqs":["CS 312","CS 355","MATH 313"]},{"code":"CS 455","name":"Computer Graphics","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["CS 355","MATH 313"]},{"code":"CS 456","name":"Introduction to User Interface Software","credits":3,"type":"major-elective","offered":{"fall":false,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240","CS 356"]},{"code":"CS 462","name":"Large-scale Distributed System Design","credits":3,"type":"major-elective","offered":{"fall":false,"winter":true,"spring":false,"summer":false},"prereqs":["CS 324","CS 340"]},{"code":"CS 465","name":"Computer Security","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["CS 324"]},{"code":"CS 470","name":"Introduction to Artificial Intelligence","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["CS 312","MATH 313","STAT 121"]},{"code":"CS 472","name":"Introduction to Machine Learning","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["MATH 313","STAT 121"]},{"code":"CS 474","name":"Deep Learning","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["MATH 313"]},{"code":"CS 486","name":"Verification and Validation","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["CS 312"]},{"code":"CS 260","name":"Web Programming","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 142"]},{"code":"CS 356","name":"Designing the User Experience","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240"]},{"code":"CS 405","name":"Creating and Managing a Software Business","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240","ENGL 316"]},{"code":"CS 494","name":"Capstone 1","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["CS 240"]},{"code":"CS 495","name":"Capstone 2","credits":3,"type":"major-elective","offered":{"fall":false,"winter":true,"spring":false,"summer":false},"prereqs":["CS 240"]},{"code":"REL A 275","name":"Teachings and Doctrine of the Book of Mormon","credits":2,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"REL A 250","name":"Jesus Christ and the Everlasting Gospel","credits":2,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"REL C 225","name":"Foundations of the Restoration","credits":2,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"REL C 200","name":"The Eternal Family","credits":2,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"A HTG 100","name":"American Heritage","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":[]},{"code":"ANTHR 101","name":"Social/Cultural Anthropology","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"WRTG 150","name":"Writing and Rhetoric","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"ARTHC 201","name":"World Civilization to 1500","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"ARTHC 202","name":"World Civilization Since 1500","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"ART 101","name":"Introduction to Art and Drawing","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"ENGL 202","name":"Masterpieces of World Literature 2","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":[]},{"code":"BIO 100","name":"Principles of Biology","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"PHY S 100","name":"Physical Science","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]}]},"schedule":{}}';
const data2 = '{"program":{"courses":[{"code":"rela121","name":"The Book of Mormon","credits":2,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"ahtg100","name":"American Heritage","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":[]},{"code":"wrtg150","name":"Writing and Rhetoric","credits":3,"type":"GE","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"econ380","name":"Intermediate Price Theory 1","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":false},"prereqs":["econ110","math112"]},{"code":"econ378","name":"Statistics for Economists","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":["econ110"]},{"code":"econ382","name":"Intermediate Price Theory 2","credits":3,"type":"major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":false},"prereqs":["econ110"]},{"code":"econ420","name":"Economicas of Antitrust Law and Regulation","credits":3,"type":"major-elective","offered":{"fall":true,"winter":false,"spring":false,"summer":false},"prereqs":["econ110"]},{"code":"econ421","name":"Law and Economics","credits":3,"type":"major-elective","offered":{"fall":false,"winter":true,"spring":false,"summer":false},"prereqs":["econ378","econ380"]},{"code":"econ431","name":"Economic Development","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["econ380","econ388","poli328"]},{"code":"math112","name":"Calculus 1","credits":4,"type":"GE-major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"econ110","name":"Economic Principles and Problems","credits":3,"type":"GE-major-required","offered":{"fall":true,"winter":true,"spring":true,"summer":true},"prereqs":[]},{"code":"econ230","name":"Economic Development and Growth","credits":3,"type":"major-elective","offered":{"fall":true,"winter":true,"spring":false,"summer":false},"prereqs":["econ110"]}]},"schedule":{}}';
const types = '["GE", "major-elective", "GE-major-required", "major-required"]';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  courses: any;
  courses2: any;
  coursesByType: any;
  types: any;
  tempObject: any;
  currentlyOpenedItemIndex = -1;

  constructor(private http: HttpClient, @Inject(DATA_SERVICE) private dataService: DataService) { }

  ngOnInit() {
    this.arrangeCoursesByType(1);
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
      this.courses = await this.dataService.fetchDataCS()
    }
    else {
      // this.tempObject = JSON.parse(data2);
      // this.courses = this.tempObject.program.courses;
      this.courses = await this.dataService.fetchDataEcon()
    }
  }

  async arrangeCoursesByType(major) {
    await this.getCourses(major);
    this.coursesByType = new Array;
    this.types = JSON.parse(types);
    for(var j = 0; j < this.types.length; j++) {
      var tempArray = new Array;
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



