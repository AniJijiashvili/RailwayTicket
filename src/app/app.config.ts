import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { HttpClient,HttpClientModule, HttpEventType, HttpHandler } from '@angular/common/http';
import { TicketService } from './ticket.service';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),TicketService  ]
};
