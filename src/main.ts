import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { youTubeSearchInjectables } from './app/you-tube-search/you-tube-search.injectables';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...youTubeSearchInjectables
  ]
});