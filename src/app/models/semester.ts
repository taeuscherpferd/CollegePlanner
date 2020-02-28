import { Course } from './course'

export class Semester {
  title: String = ""
  creditCount: Number = 0
  courses: Array<Course> = []
  id: Number 

  constructor(i_courses: [Course], i_Id?: Number) {
    this.courses = i_courses

    if (i_Id) {
      this.id = i_Id
    }
  }
}