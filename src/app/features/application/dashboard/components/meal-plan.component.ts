import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DayOverviewComponent } from './day-overview/day-overview.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealPlan } from '../dashboard.component';

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DayOverviewComponent,
    MealCardComponent,
  ],
  template: `
    <div class="p-6 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg">
      <div class="flex justify-between items-center mb-8">
        <button
          (click)="previousDay()"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-4 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Vorige dag</span>
        </button>
        <h3
          class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
        >
          {{ currentDate() | date : 'EEEE d MMMM' }}
        </h3>
        <button
          (click)="nextDay()"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-4 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Volgende dag</span>
        </button>
      </div>

      <div class="grid grid-cols-1 gap-8">
        @if(meals) {
        <app-day-overview [meals]="meals"></app-day-overview>

        <!-- Detailed Meal Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-meal-card
            *ngFor="let mealType of mealOrder"
            [mealType]="mealType"
            [meal]="meals[mealType]"
          ></app-meal-card>
        </div>
        } @else {
        <div class="text-center py-12">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vector-effect="non-scaling-stroke"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">
            Geen maaltijden gepland
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Er zijn nog geen maaltijden gepland voor deze dag.
          </p>
        </div>
        }
      </div>
    </div>
  `,
})
export class MealPlanComponent implements OnInit {
  @Input() meals: MealPlan | undefined;

  currentDate = signal(new Date());
  mealOrder: string[] = ['ontbijt', 'lunch', 'avondeten'];

  @Output() next: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() previous: EventEmitter<Date> = new EventEmitter<Date>();

  ngOnInit(): void {
    // Initialize component
  }

  previousDay(): void {
    this.currentDate.update((date) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - 1);
      return newDate;
    });
    this.previous.emit(this.currentDate());
  }

  nextDay(): void {
    this.currentDate.update((date) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + 1);
      return newDate;
    });
    this.next.emit(this.currentDate());
  }
}
