import {Component, inject} from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {take} from "rxjs";
import {CountryInterface} from "../../interfaces/country.interface";
import {CountryTableComponent} from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {
  private countriesService: CountriesService = inject(CountriesService);
  public placeholder: string = 'Search by country'
  public countries: CountryInterface[] = [];

  onCountrySearch(term: string) {
    this.countriesService.searchCountry(term)
      .pipe(
        take(1)
      )
      .subscribe((data: CountryInterface[]) =>{
        this.countries = data;
      })
  }
}
