import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SearchResult } from './search-result.model';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './you-tube-search.injectables';

@Injectable()
export class YouTubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject('AIzaSyD7WDDbH2c-RqfTdtr8HPMphZezV4Lmyew') private apiKey: string,
    @Inject('https://www.googleapis.com/youtube/v3/search') private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get<any>(queryUrl).pipe(
      map(response => {
        return response.items.map((item: any) => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      })
    );
  }
}