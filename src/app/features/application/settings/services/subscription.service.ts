import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class SubscriptionService {
  httpClient = inject(HttpClient);

  getSubscription() {
    return this.httpClient.get(`${environment.apiUrl}/api/subscription`);
  }

  getSubscriptionLinks() {
    return this.httpClient.get(`${environment.apiUrl}/api/subscription/links`);
  }

  getSubscriptionCustomerPortal() {
    return this.httpClient.get(
      `${environment.apiUrl}/api/subscription/customer-portal`
    );
  }
}
