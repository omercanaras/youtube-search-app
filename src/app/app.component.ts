import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YouTubeSearchComponent } from "./you-tube-search/you-tube-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ YouTubeSearchComponent],
 template: `<app-you-tube-search></app-you-tube-search>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube-search-app';
}
