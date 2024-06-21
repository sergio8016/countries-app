import {Component, inject} from '@angular/core';
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";
import {take} from "rxjs";
import {NgClass} from "@angular/common";

type Continent = 'America' | 'Africa' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CountryTableComponent,
    SearchBoxComponent,
    NgClass
  ],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  private countriesService: CountriesService = inject(CountriesService);
  public placeholder: string = 'Search by region'
  public countries: CountryInterface[] = [];
  public type: string = 'region';
  public isLoading: boolean = false;
  public regions: Continent[] = ['America', 'Africa', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion: string = '';

  onRegionSearch(term: Continent): void {
    this.selectedRegion = term;
    this.isLoading = true;
    this.countriesService.search(term, this.type)
      .pipe(
        take(1)
      )
      .subscribe((response: CountryInterface[]) => {
        this.countries = response;
        this.isLoading = false;
      });
  }
}
