import { Inject } from '@angular/core';
import { IDataService } from '../interfaces/services/data-service.interface';
import { NETWORK_SERVICE } from '../interfaces/tokens/network-service-interface.token';
import { INetworkService } from '../interfaces/services/network-service.interface';
import { Course } from '../models/course';
import { SemesterListComponent } from '../semester-list/semester-list.component';

const semesterData : Array<SemesterListComponent> = [new SemesterListComponent(), new SemesterListComponent(), new SemesterListComponent(), new SemesterListComponent()]

export class DataService implements IDataService {

  BASE_ENDPOINT: string;

  // private courses: [Course];
  constructor( @Inject(NETWORK_SERVICE) private networkService: INetworkService ) {
    this.BASE_ENDPOINT = 'http://localhost:4000';
  }

  addSemester(semester: SemesterListComponent) {
    //TODO: This should probably be marked as async and talk with the backend
    semesterData.push(semester)
  }

  async getSemesterData() : Promise<Array<SemesterListComponent>> {
    return semesterData
  }

  async fetchCourseData(major: String): Promise<Array<Course>> {
    let resp = await this.networkService.get(this.BASE_ENDPOINT+'/majorProgram/'+major);
    return resp.program.courses;
  }
}
