import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class HeroService {
  getHeroes(): Observable<Hero[]>  {
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor() {
   }

}