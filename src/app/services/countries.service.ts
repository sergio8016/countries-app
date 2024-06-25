import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {CountryInterface} from "../interfaces/country.interface";
import {CacheInterface} from "../interfaces/cache.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  httpClient: HttpClient = inject(HttpClient)
  private url: string = 'https://restcountries.com/v3.1';
  public cacheStorage: CacheInterface = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor() {
    this.loadFromLocalStorage();
  }
  private saveToLocalStorage() {
    localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStorage));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStorage')) return;
    this.cacheStorage = JSON.parse(localStorage.getItem('cacheStorage')!);
  }

  search(term: string, type: string): Observable<CountryInterface[]> {
    return this.httpClient.get<CountryInterface[]>(`${this.url}/${type}/${term}`)
      .pipe(
        tap((countries: CountryInterface[]) => {
          switch (type) {
            case 'capital':
              this.cacheStorage.byCapital = {term, countries};
              break;
            case 'name':
              this.cacheStorage.byCountry = {term, countries}
              break;
            case 'region':
              this.cacheStorage.byRegion = {region: term, countries}
              break;
          }
        }),
        tap(() => this.saveToLocalStorage()),
        catchError(() => of([])),
      );
  }
}
