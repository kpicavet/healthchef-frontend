import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalutationComponent } from './components/salutation.component';
import { MealPlanComponent } from './components/meal-plan.component';
import { DashboardService } from './services/dashboard.service';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { format, isEqual, startOfDay } from 'date-fns';

interface Meal {
  name: string;
  description: string;
  calories: number;
  image: string;
  protein: number;
  carbs: number;
  fat: number;
  preparationTime: number;
}

export interface MealPlan {
  [key: string]: Meal;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SalutationComponent, MealPlanComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <app-salutation
        (generate)="generate($event)"
        [isLoading]="isGenerating"
      />
      <app-meal-plan
        (next)="mealDate$.next($event)"
        (previous)="mealDate$.next($event)"
        [meals]="(meals$ | async)!"
      ></app-meal-plan>
    </div>
  `,
})
export class DashboardComponent {
  dashboardService = inject(DashboardService);

  isGenerating = false;
  meals$!: Observable<MealPlan | undefined>;
  mealDate$: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());

  ngOnInit() {
    this.meals$ = this.mealDate$.pipe(
      switchMap((date) =>
        this.dashboardService.getPlanningDay(format(date, 'yyyy-MM-dd')).pipe(
          map(() => {
            if (isEqual(startOfDay(date), startOfDay(new Date()))) {
              return {
                ontbijt: {
                  name: 'Havermout met Bessen',
                  description:
                    'Een voedzame kom havermout met verse gemengde bessen.',
                  calories: 300,
                  image:
                    'https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
                  protein: 10,
                  carbs: 50,
                  fat: 5,
                  preparationTime: 10,
                },
                lunch: {
                  name: 'Gegrilde Kip Salade',
                  description:
                    'Verse gemengde sla met gegrilde kipfilet en lichte vinaigrette.',
                  calories: 400,
                  image:
                    'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1477&q=80',
                  protein: 30,
                  carbs: 20,
                  fat: 15,
                  preparationTime: 20,
                },
                avondeten: {
                  name: 'Gebakken Zalm met Geroosterde Groenten',
                  description:
                    'In de oven gebakken zalmfilet geserveerd met een mix van geroosterde seizoensgroenten.',
                  calories: 500,
                  image:
                    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
                  protein: 35,
                  carbs: 30,
                  fat: 25,
                  preparationTime: 30,
                },
              };
            } else {
              return undefined;
            }
          })
        )
      )
    );
  }

  generate(selectedWeek: number) {
    this.isGenerating = true;
    this.dashboardService.generateMealPlan(selectedWeek).subscribe(
      (response) => {
        console.log('Meal plan generated:', response);
        this.isGenerating = false;
      },
      (error) => {
        console.error('Error generating meal plan:', error);
        this.isGenerating = false;
      }
    );
  }
}
