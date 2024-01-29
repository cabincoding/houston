import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { Works } from '../interfaces/works.interface';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  works$!: Observable<Works[] | null>;
  projects: any[] = [
    { title: "ABOVE HEAVEN", series: "STAND ALONE", releaseDate: "MAY 1, 2023", finished: true, written: 100, rawEdit: 100, finalEdit: 100 },
    { title: "VOWS OF BLOOD AND HONOR", series: "WRITTEN IN STONE BOOK 2", releaseDate: "SEPTEMBER 4, 2023", finished: true, written: 100, rawEdit: 100, finalEdit: 100 },
  ]

  constructor(
    private sharedService: SharedService,
  ) {
    this.works$ = this.sharedService.getWorks().pipe(
      map(works => works ? works.filter(work => this.projects.some(project => project.title === work.title)) : null)
    );
  }
}
