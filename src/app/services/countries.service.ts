import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountyInterface} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  httpClient: HttpClient = inject(HttpClient)
  private url: string = 'https://restcountries.com/v3.1';
  //https://restcountries.com/v3.1/capital/{capital}


  searchRegion(term: string): Observable<CountyInterface[]> {
    return this.httpClient.get<CountyInterface[]>(`${this.url}/region/${term}`);
  }

  searchCountry(term: string): Observable<CountyInterface[]> {
    return this.httpClient.get<CountyInterface[]>(`${this.url}/name/${term}`);
  }

  searchCapital(term: string): Observable<CountyInterface[]> {
    return this.httpClient.get<CountyInterface[]>(`${this.url}/capital/${term}`);
  }

}
