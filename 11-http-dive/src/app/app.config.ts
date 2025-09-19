import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  console.log('Outgoing request', request);

  const mutatedRequest = request.clone({});

  return next(mutatedRequest).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response)
        console.log('Incoming response', event.status, event.body);
    })
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
};
