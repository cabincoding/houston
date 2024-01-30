import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog.interface';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss'
})
export class UpdatesComponent {
  posts$!: Observable<Blog[] | null>;

  constructor(
    private sharedService: SharedService,
  ) {
    this.posts$ = this.sharedService.getBlog();
  }
}
