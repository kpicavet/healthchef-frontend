import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

export const planningRoutes: Routes = [
  {
    path: '',
    redirectTo: 'week/current',
    pathMatch: 'full',
  },
  {
    path: 'week/:weekId',
    component: CalendarComponent,
  },
];
