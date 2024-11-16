import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class DashboardService {
  httpClient = inject(HttpClient);

  getPlanningDay(isoDay: string) {
    return this.httpClient
      .get(`${environment.apiUrl}/api/planning/${isoDay}`)
      .pipe(catchError(() => of(null)));
  }

  generateMealPlan(weekNumber: number): Observable<any> {
    return this.httpClient.get(
      `${environment.apiUrl}/api/planning/week/${weekNumber}/generate`
    );
  }
}
