import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResult } from './search-result.model';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() result!: SearchResult;
}
