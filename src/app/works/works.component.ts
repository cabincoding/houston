import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  works: any[] = [
    {"title": "DANCE OF FROZEN DEATH", "releaseDate": "January 2, 2023", "details": "Series Details:<br>Written in Stone Book 1 in the<br>Elpeasia Universe", "link": "https://www.amazon.com/dp/B0BRFDVSGZ", "photo": "../assets/photos/Dance-of-Frozen-Death.png"},
    {"title": "ABOVE HEAVEN", "releaseDate": "May 1, 2023", "details": "Novel Details:<br>Stand Alone Novel in the<br>Elpeasia Universe", "link": "https://www.amazon.com/Above-Heaven-H-G-Randolph-ebook/dp/B0C3Z4LNSJ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1682981155&sr=8-1", "photo": "../assets/photos/Above-Heaven.png"},
    {"title": "VOWS OF BLOOD AND HONOR", "releaseDate": "September 4, 2023", "details": "Series Details:<br>Written in Stone Book 2 in the<br>Elpeasia Universe", "link": "", "photo": "../assets/photos/Vows-of-Blood-and-Honor.png"},
  ]
}
