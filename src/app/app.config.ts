import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      domain: `${environment.auth0Domain}`,
      clientId: 'InkHHo3NiNPnOhxVPXPbkrSWZTCpZevU',
      authorizationParams: {
        redirect_uri: `${environment.frontUrl}/login`,
        audience: `${environment.apiUrl}`,
      },
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://{yourDomain}/api/v2/' (note the asterisk)
            uri: `${environment.apiUrl}/api/*`,
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: `${environment.apiUrl}`,
                // The attached token should have these scopes
              },
            },
          },
        ],
      },
    }),
  ],
};
