import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Input() placeholder!: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onInputEnter(event: any) {
    this.search.emit(event)
  }
}
