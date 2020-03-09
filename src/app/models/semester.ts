import { Course } from './course'

export class Semester {
  title: string = ""
  creditCount: number = 0
  courses: Array<Course> = []
  id: number
  year: string;
  type: string;
  // TODO: This could cause some issues
  // courses: Array<string>;

  constructor(i_courses?: [Course], i_Id?: number) {
    if (i_courses != null) {
      this.courses = i_courses
    }

    if (i_Id) {
      this.id = i_Id
    }

    for (let course of this.courses) {
      this.creditCount += course.credits
    }
  }
}
