import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  author$!: Observable<Author | null>;
  @Input() bgcolor: string = '#191919';
  title!: string;
  body!: string;

  constructor(
    private sharedService: SharedService,
  ) {
    this.author$ = this.sharedService.getAuthor();
  }

  ngOnInit() {
    this.title = "ABOUT H.G. RANDOLPH";
    this.body = "H.G. Randolph has been telling stories his entire life. At the age of fourteen, he started writing and never stopped. After fourteen years of working on his craft, he felt confident enough to share Elpeasia, the strange world inside his head. While he pushes his limits by writing in every genre, his specialties lie in fantasy and science fiction. He hopes that you’ll join him on a journey through the wildest set of interconnected stories imaginable."
  }

}
