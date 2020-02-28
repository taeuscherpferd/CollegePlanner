export class Course {
  courseName: string 
  courseCode: string
  creditCount: number
  courseType: string
  semesterOffered: {fall: Boolean, summer: Boolean, winter: Boolean, spring: Boolean}
  prereqs: [string]
}