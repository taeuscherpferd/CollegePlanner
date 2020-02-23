import { Course } from 'src/app/models/course';
import { SemesterListComponent } from 'src/app/semester-list/semester-list.component';

export interface IDataService {
  fetchCourseData(major: string): Promise<Array<Course>>
  getSemesterData(): Promise<Array<SemesterListComponent>>

}