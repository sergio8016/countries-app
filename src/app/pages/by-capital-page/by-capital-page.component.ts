import {Component, inject} from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {take} from "rxjs";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  placeholder: string = 'Search by capital'
  countriesService: CountriesService = inject(CountriesService);
  onSearchBYCapital(term: string) {
    this.countriesService.searchCapital(term)
      .pipe(
        take(1)
      )
      .subscribe(data => console.log(data));
  }
}
