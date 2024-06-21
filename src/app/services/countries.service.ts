import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {CountryInterface} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  httpClient: HttpClient = inject(HttpClient)
  private url: string = 'https://restcountries.com/v3.1';
  search(term: string, type: string): Observable<CountryInterface[]> {
    return this.httpClient.get<CountryInterface[]>(`${this.url}/${type}/${term}`)
      .pipe(
        catchError( () => of([])),
      );
  }
}
