import {
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output, Renderer2,
  ViewChild
} from '@angular/core';
import {debounceTime, Subject} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit{
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder!: string;
  @Input() initialValue: string = '';
  @ViewChild('inputSearch') searchInput!: ElementRef;
  private bouncer: Subject<string> = new Subject<string>();
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.bouncer.pipe(
      debounceTime(500),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((term: string) => {
      this.search.emit(term)
    })
  }

  onInputSearch(event: any): void {
    this.bouncer.next(event);
  }
}
