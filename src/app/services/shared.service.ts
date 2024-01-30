import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Author } from '../interfaces/author.interface';
import { HttpClient } from '@angular/common/http';
import { Works } from '../interfaces/works.interface';
import { Newsletter } from '../interfaces/newsletter.interface';
import { Terminology } from '../interfaces/terminology.interface';
import { Magic } from '../interfaces/magic.interface';
import { Country } from '../interfaces/country.interface';
import { Character } from '../interfaces/character.interface';
import { Blog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  author$!: Observable<Author | null>;
  works$!: Observable<Works[] | null>;
  newsletter$!: Observable<Newsletter[] | null>;
  characters$!: Observable<Character[] | null>;
  countries$!: Observable<Country[] | null>;
  terminology$!: Observable<Terminology[] | null>;
  magic$!: Observable<Magic[] | null>;
  blog$!: Observable<Blog[] | null>;

  constructor(private http: HttpClient) {
    this.author$ = this.http.get<Author[]>('http://localhost:3000/author').pipe(
      map(authors => authors[0] || null),
      shareReplay(1)
    );
    this.works$ = this.http.get<Works[]>('http://localhost:3000/books').pipe(
      shareReplay(1)
    );
    this.newsletter$ = this.http.get<Newsletter[]>('http://localhost:3000/newsletter').pipe(
      shareReplay(1)
    );
    this.characters$ = this.http.get<Character[]>('http://localhost:3000/characters').pipe(
      shareReplay(1)
    )
    this.countries$ = this.http.get<Country[]>('http://localhost:3000/countries').pipe(
      shareReplay(1)
    )
    this.terminology$ = this.http.get<Terminology[]>('http://localhost:3000/terminology').pipe(
      shareReplay(1)
    )
    this.magic$ = this.http.get<Magic[]>('http://localhost:3000/magic').pipe(
      shareReplay(1)
    )
    this.blog$ = this.http.get<Blog[]>('http://localhost:3000/blog').pipe(
      shareReplay(1)
    )
  }

  getAuthor(): Observable<Author | null> {
    return this.author$;
  }

  getWorks(): Observable<Works[] | null> {
    return this.works$;
  }

  getNewsletter(): Observable<Newsletter[] | null> {
    return this.newsletter$;
  }

  getCharacters(): Observable<Character[] | null> {
    return this.characters$;
  }

  getCountries(): Observable<Country[] | null> {
    return this.countries$;
  }

  getTerminology(): Observable<Terminology[] | null> {
    return this.terminology$;
  }

  getMagic(): Observable<Magic[] | null> {
    return this.magic$;
  }

  getBlog(): Observable<Blog[] | null> {
    return this.blog$;
  }
}
