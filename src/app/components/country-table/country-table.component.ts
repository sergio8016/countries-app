import {Component, Input} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";
import {DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    DecimalPipe,
    RouterLink
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent {
  @Input() data: CountryInterface[] = [];
  @Input() type!: string;
}
