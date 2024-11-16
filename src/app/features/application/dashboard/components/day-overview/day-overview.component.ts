import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

interface MealPlan {
  [key: string]: Meal;
}

@Component({
  selector: 'app-day-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <h4
        class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Dagoverzicht
      </h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul class="space-y-4 mb-6">
          <li
            *ngFor="let meal of meals | keyvalue"
            class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <span
              [ngClass]="{
                'text-green-500': meal.key === 'ontbijt',
                'text-yellow-500': meal.key === 'lunch',
                'text-blue-500': meal.key === 'avondeten'
              }"
              class="w-10 h-10 mr-3 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <svg
                *ngIf="meal.key === 'ontbijt'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
              <svg
                *ngIf="meal.key === 'lunch'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <svg
                *ngIf="meal.key === 'avondeten'"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
              </svg>
            </span>
            <div class="flex-1 ml-3">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ meal.key }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ meal.value.name }}
              </p>
            </div>
            <span
              class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
            >
              {{ meal.value.calories }} kcal
            </span>
          </li>
        </ul>
        <div class="p-4 bg-blue-50 rounded-lg dark:bg-blue-900">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Dagelijkse Totalen
          </h5>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Calorieën
              </p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">
                {{ totalCalories }} kcal
              </p>
            </div>
            <div class="p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Eiwitten
              </p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">
                {{ totalProtein }}g
              </p>
            </div>
            <div class="p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Koolhydraten
              </p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">
                {{ totalCarbs }}g
              </p>
            </div>
            <div class="p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Vetten
              </p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">
                {{ totalFat }}g
              </p>
            </div>
          </div>
          <div class="mt-4 p-3 bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
              Totale Bereidingstijd
            </p>
            <p class="text-lg font-bold text-gray-900 dark:text-white">
              {{ totalPrepTime }} min
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DayOverviewComponent {
  @Input() meals!: MealPlan;

  get totalCalories(): number {
    return Object.values(this.meals).reduce(
      (total, meal) => total + meal.calories,
      0
    );
  }

  get totalProtein(): number {
    return Object.values(this.meals).reduce(
      (total, meal) => total + meal.protein,
      0
    );
  }

  get totalCarbs(): number {
    return Object.values(this.meals).reduce(
      (total, meal) => total + meal.carbs,
      0
    );
  }

  get totalFat(): number {
    return Object.values(this.meals).reduce(
      (total, meal) => total + meal.fat,
      0
    );
  }

  get totalPrepTime(): number {
    return Object.values(this.meals).reduce(
      (total, meal) => total + meal.preparationTime,
      0
    );
  }
}
