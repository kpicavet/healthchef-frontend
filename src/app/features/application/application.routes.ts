import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationComponent } from './application.component';
import { DashboardService } from './dashboard/services/dashboard.service';
import { SettingsComponent } from './settings/pages/settings.component';
import { RecipeOverviewComponent } from './recipes/recipe-overview.component';
import { RecipeComponent } from './recipes/recipe.component';
import {SubscriptionService} from "./settings/services/subscription.service";

export const applicationRoutes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        providers: [DashboardService],
        component: DashboardComponent,
      },
      {
        path: 'recipes',
        component: RecipeOverviewComponent,
      },
      {
        path: 'recipes/:id',
        component: RecipeComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
        providers: [SubscriptionService],
      }
    ],
  },
];
