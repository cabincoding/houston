import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { Observable } from 'rxjs';
import { Works } from '../interfaces/works.interface';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  providers: [DatePipe],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  works$!: Observable<Works[] | null>;

  constructor(
    private sharedService: SharedService,
  ) {
    this.works$ = this.sharedService.getWorks();
  }
}
