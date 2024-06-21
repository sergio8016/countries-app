import {Component, inject} from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {take} from "rxjs";
import {CountryInterface} from "../../interfaces/country.interface";
import {CountryTableComponent} from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  placeholder: string = 'Search by capital'
  countriesService: CountriesService = inject(CountriesService);
  capitals:CountryInterface[] = [];
  type: string = 'capital'
  onSearchByCapital(term: string) {
    this.countriesService.search(term, this.type)
      .pipe(
        take(1)
      )
      .subscribe((response: CountryInterface[]) => this.capitals = response);
  }
}
