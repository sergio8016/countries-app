import {Component, inject, OnInit} from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent,
    NgIf
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent implements OnInit {

  private countriesService: CountriesService = inject(CountriesService);
  public type: string = 'capital';
  public placeholder: string = 'Search by capital'
  public capitals:CountryInterface[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  ngOnInit(): void {
    this.capitals = this.countriesService.cacheStorage.byCapital.countries;
    this.initialValue = this.countriesService.cacheStorage.byCapital.term;
  }
  onSearchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.search(term, this.type)
      .subscribe((response: CountryInterface[]) => {
        this.capitals = response;
        this.isLoading = false;
      });
  }
}
