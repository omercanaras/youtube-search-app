import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';

import { SearchResult } from './search-result.model';
import { SearchResultComponent } from './search-result.component';

@Component({
  selector: 'app-you-tube-search',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, SearchResultComponent],
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent {
  results: SearchResult[] = [];
  loading: boolean = false;

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
