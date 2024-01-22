import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MaterialModule } from '../material/material.module';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    MaterialModule,
    ProgressComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title!: string;
  subtitle!: string;
  announceTitle!: string;
  announceDate!: string;
  announceBody!: string;

  ngOnInit() {
    this.title = "H.G. Randolph"
    this.subtitle = "Author"
    this.announceTitle = "OUT NOW:\nVows of Blood and Honor"
    this.announceDate = "September 4, 2023";
    this.announceBody = "Please check out the continuation of December\\'s Journey in Book 2 of the Written in Stone series.\n\nWith her new nation established, December Evermore must leave the safety of the Frozen Winds to meet with the gods. Every country within the Nine Kingdoms of Ten is sending representatives to the Forsaken for the World Peace Summit. Despite only recently getting her bearings in this strange, magical era, the Snow Queen has to dive into the deep end of the realm\\’s politics. All the while, skeptical eyes watch her every move, ready to judge her for prophecies which are out of her control.\n\nUnfortunately, December isn\\’t the only one with an agenda. Every other territory is seeking to improve their standing on the world stage. Facing bloody coups, vengeful foes, and hateful preconceptions, she has to fight for her home\\’s right to exist. The Frozen Winds needs allies to survive, and December is ready to break every rule, even her own ethical standards, to keep her people safe."
  }

}
