import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map, switchMap, take} from "rxjs";
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";
import {DecimalPipe, KeyValuePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    DecimalPipe,
    KeyValuePipe,
    UpperCasePipe
  ],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss'
})
export class CountryPageComponent implements OnInit{
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private countriesService: CountriesService = inject(CountriesService);
  private router: Router = inject(Router);
  public country!: CountryInterface | null;
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        take(1),
        switchMap( (params: Params) => this.countriesService.search(params['id'], 'alpha')),
        map((countries: CountryInterface[]): CountryInterface | null => countries.length > 0 ? countries[0] : null)
      )
      .subscribe( (response: CountryInterface | null): Promise<boolean> | void => {
        if (!response) return this.router.navigateByUrl('');
        this.country = response;
      });
  }


}
