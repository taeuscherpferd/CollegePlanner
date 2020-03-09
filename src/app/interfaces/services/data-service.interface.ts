import { Course } from 'src/app/models/course';
import { Semester } from 'src/app/models/semester';

export interface IDataService {
  fetchCourseData(major: string): Promise<Array<Course>>
  getSemesterData(): Promise<Array<Semester>>
  addSemester(semester: Semester)

}