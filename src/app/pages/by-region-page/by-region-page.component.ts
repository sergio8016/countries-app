import {Component, inject} from '@angular/core';
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";
import {take} from "rxjs";

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CountryTableComponent,
    SearchBoxComponent
  ],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  private countriesService: CountriesService = inject(CountriesService);
  public placeholder: string = 'Search by region'
  public regions: CountryInterface[] = [];
  public type: string = 'region';
  public isLoading: boolean = false;

  onRegionSearch(term: string) {
    this.isLoading = true;
    this.countriesService.search(term, this.type)
      .pipe(
        take(1)
      )
      .subscribe((response: CountryInterface[]) => {
        this.regions = response;
        this.isLoading = false;
      });
  }
}
