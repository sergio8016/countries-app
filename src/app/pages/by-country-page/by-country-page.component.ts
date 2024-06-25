import {Component, inject, OnInit} from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
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
export class ByCountryPageComponent implements OnInit {

  private countriesService: CountriesService = inject(CountriesService);
  public placeholder: string = 'Search by country'
  public countries: CountryInterface[] = [];
  public type: string = 'name';
  public isLoading: boolean = false;
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byCountry.countries;
    this.initialValue = this.countriesService.cacheStorage.byCountry.term;
  }
  onCountrySearch(term: string) {
    this.isLoading = true;
    this.countriesService.search(term, this.type)
      .subscribe((response: CountryInterface[]) => {
        this.countries = response;
        this.isLoading = false;
      });
  }
}
