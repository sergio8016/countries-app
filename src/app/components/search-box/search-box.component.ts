import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder!: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  private bouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.bouncer.pipe(
      debounceTime(500)
    ).subscribe((term:string) => {
      this.search.emit(term)
    })
  }

  onInputSearch(event: any): void {
    this.bouncer.next( event)
  }
}
