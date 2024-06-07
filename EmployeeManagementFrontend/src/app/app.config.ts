import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
// import { AuthInterceptor } from './services/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // HttpClient, 
    provideHttpClient(),
    provideHttpClient(withFetch()),
    // AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};
