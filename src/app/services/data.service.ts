import { Inject } from '@angular/core';
import { IDataService } from '../interfaces/services/data-service.interface';
import { NETWORK_SERVICE } from '../interfaces/tokens/network-service-interface.token';
import { INetworkService } from '../interfaces/services/network-service.interface';
import { Course } from '../models/course';
import { Semester } from '../models/semester';

const semesterData : Array<Semester> = [new Semester([{"courseCode":"CS 142","courseName":"Introduction to Computer Programming","creditCount":3,"courseType":"major-required","semesterOffered":{"fall":true,"winter":true,"spring":true,"summer":false}, "prereqs": [""]}], 1), new Semester([{"courseCode":"CS 142","courseName":"Introduction to Computer Programming","creditCount":3,"courseType":"major-required","semesterOffered":{"fall":true,"winter":true,"spring":true,"summer":false}, "prereqs": [""]}], 2), new Semester([{"courseCode":"CS 142","courseName":"Introduction to Computer Programming","creditCount":3,"courseType":"major-required","semesterOffered":{"fall":true,"winter":true,"spring":true,"summer":false}, "prereqs": [""]}], 3), new Semester([{"courseCode":"CS 142","courseName":"Introduction to Computer Programming","creditCount":3,"courseType":"major-required","semesterOffered":{"fall":true,"winter":true,"spring":true,"summer":false}, "prereqs": [""]}], 4)] 

export class DataService implements IDataService {

  BASE_ENDPOINT: string;

  // private courses: [Course];
  constructor( @Inject(NETWORK_SERVICE) private networkService: INetworkService ) {
    this.BASE_ENDPOINT = 'http://localhost:4000';
  }

  addSemester(semester: Semester) {
    //TODO: This should probably be marked as async and talk with the backend
    semesterData.push(semester)
  }

  async getSemesterData() : Promise<Array<Semester>> {
    return semesterData
  }

  async fetchCourseData(major: String): Promise<Array<Course>> {
    let resp = await this.networkService.get(this.BASE_ENDPOINT+'/majorProgram/'+major);
    return resp.program.courses;
  }
}
