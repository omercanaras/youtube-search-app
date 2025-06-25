import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';
import { YouTubeSearchService } from './you-tube-search.service';
import { SearchResult } from './search-result.model';

import {
  fromEvent,
  debounceTime,
  map,
  switchMap,
  filter,
  tap,
  catchError,
  of
} from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  template: `
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      autofocus
    />
  `,
  styles: [`
    input { width: 100%; margin-bottom: 1rem; }
  `]
})
export class SearchBoxComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<SearchResult[]>();

  private el = inject(ElementRef);
  private youtube = inject(YouTubeSearchService);

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((text: string) => text.length > 1),
      debounceTime(300),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.youtube.search(query)),
      switchMap(results$ => results$),
      catchError(err => {
        console.error('YouTube search error:', err);
        this.loading.emit(false);
        return of([]);
      })
    ).subscribe(results => {
      this.loading.emit(false);
      this.results.emit(results);
    });
  }
}
