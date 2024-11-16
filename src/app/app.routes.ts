import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/landing/pages/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'application',
    loadChildren: () =>
      import('./features/application/application.routes').then(
        (m) => m.applicationRoutes
      ),
    canActivate: [authGuardFn],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
    canActivate: [authGuardFn],
  },
];
