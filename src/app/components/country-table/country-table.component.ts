import {Component, Input, input} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent {
  @Input() data: CountryInterface[] = [];
}
