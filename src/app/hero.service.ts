import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';

import { Hero } from './hero';




@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private endpoint = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  getHeroes(): Observable<Hero[]> {

    return (this.http.get<Hero[]>(this.endpoint));
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Hero>(url);
  }

  addHero(hero: Hero): Observable<any> {

    return this.http.post(this.endpoint, JSON.stringify(hero), this.httpOptions);
  }

  updateHero(hero: Hero): Observable<any> {
    console.log('inside update method');
    return this.http.put(this.endpoint, JSON.stringify(hero), this.httpOptions);

  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.endpoint}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions);
  }

}
