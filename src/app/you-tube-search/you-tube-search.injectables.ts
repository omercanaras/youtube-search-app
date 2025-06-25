import { YouTubeSearchService } from "./you-tube-search.service";

export const YOUTUBE_API_KEY: string = 'AIzaSyD7WDDbH2c-RqfTdtr8HPMphZezV4Lmyew';
export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';


export const youTubeSearchInjectables: Array<any> = [
  { provide: YouTubeSearchService, useClass: YouTubeSearchService },
  { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];