import { Component, OnInit, Inject } from '@angular/core';
import { DATA_SERVICE } from '../interfaces/tokens/data-service-interface.token';
import { DataService } from '../services/data.service';
import { SemesterListComponent } from '../semester-list/semester-list.component';

@Component({
  selector: 'app-semester-view',
  templateUrl: './semester-view.component.html',
  styleUrls: ['./semester-view.component.css']
})
export class SemesterViewComponent implements OnInit {
  semesterLists: Array<SemesterListComponent> = []

  constructor(@Inject(DATA_SERVICE) private dataService: DataService) { }

  async ngOnInit() {
    this.semesterLists = await this.dataService.getSemesterData()
  }
  onAddSemesterButtonClick() {
    let newComp = new SemesterListComponent()
    this.dataService.addSemester(newComp)
  }
}
