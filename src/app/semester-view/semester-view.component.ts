import { Component, OnInit, Inject } from '@angular/core';
import { DATA_SERVICE } from '../interfaces/tokens/data-service-interface.token';
import { DataService } from '../services/data.service';
import { SemesterListComponent } from '../semester-list/semester-list.component';
import { Semester } from '../models/semester';
import { Course } from '../models/course';

@Component({
  selector: 'app-semester-view',
  templateUrl: './semester-view.component.html',
  styleUrls: ['./semester-view.component.css']
})
export class SemesterViewComponent implements OnInit {
  semesterLists: Array<Semester> = []

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) { }

  async ngOnInit() {
    this.semesterLists = await this.dataService.getSemesterData()
  }
  onAddSemesterButtonClick() {
    let newSem = new Semester()
    newSem.id = 5
    newSem.title = "New Semester"
    this.dataService.addSemester(newSem)
  }
}
