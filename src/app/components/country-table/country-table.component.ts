import {Component, Input} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";
import {DecimalPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    DecimalPipe,
    RouterLink,
    NgIf
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss'
})
export class CountryTableComponent {
  @Input() data: CountryInterface[] = [];
  @Input() type!: string;
  @Input() isLoading: boolean = false;
}
