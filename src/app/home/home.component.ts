import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MaterialModule } from '../material/material.module';
import { ProgressComponent } from '../progress/progress.component';
import { Observable, map } from 'rxjs';
import { Author } from '../interfaces/author.interface';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';
import { Newsletter } from '../interfaces/newsletter.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    MaterialModule,
    ProgressComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  author$!: Observable<Author | null>;
  newsletters$!: Observable<Newsletter[] | null>;
  title!: string;
  subtitle!: string;
  announceTitle!: string;
  announceDate!: string;
  announceBody!: string;

  constructor(
    private sharedService: SharedService,
  ) {
    this.author$ = this.sharedService.getAuthor();
    this.newsletters$ = this.sharedService.getNewsletter();
  }

  ngOnInit() {
    this.newsletters$.subscribe({
      next: newsletter => {
        console.log({newsletter});
      }
    })
  }

}
