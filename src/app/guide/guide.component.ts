import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';
import { Country } from '../interfaces/country.interface';
import { Terminology } from '../interfaces/terminology.interface';
import { Magic } from '../interfaces/magic.interface';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss'
})
export class GuideComponent {
  characters$!: Observable<Character[] | null>;
  countries$!: Observable<Country[] | null>;
  terminiology$!: Observable<Terminology[] | null>;
  magic$!: Observable<Magic[] | null>;
  countriesDescription!: string;

  constructor(
    private sharedService: SharedService
    ) {
      this.characters$ = this.sharedService.getCharacters();
      this.countries$ = this.sharedService.getCountries();
      this.terminiology$ = this.sharedService.getTerminology();
      this.magic$ = this.sharedService.getMagic();
    }

  ngOnInit() {
    this.countriesDescription = "The Nine Kingdoms of Ten make up the ten countries in the magical world. However, the country of the gods isn’t counted by anyone on this planet, hence the name Nine Kingdoms of Ten. Each nation has vastly different terrains, cultures, and magic preferences. There is an unsteady peace spread across the land. While there are grudges and a desire to fight, the nine kingdoms won’t go to war as long as there is stability among the gods."
  }
  
}
