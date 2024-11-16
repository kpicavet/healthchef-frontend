import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full"
    >
      <div
        [ngClass]="{
          'bg-green-100 dark:bg-green-800': mealType === 'ontbijt',
          'bg-yellow-100 dark:bg-yellow-800': mealType === 'lunch',
          'bg-blue-100 dark:bg-blue-800': mealType === 'avondeten'
        }"
        class="p-5 rounded-t-lg"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize flex items-center"
        >
          <span
            [ngClass]="{
              'text-green-500': mealType === 'ontbijt',
              'text-yellow-500': mealType === 'lunch',
              'text-blue-500': mealType === 'avondeten'
            }"
            class="w-8 h-8 mr-3 flex-shrink-0 rounded-full flex items-center justify-center"
          >
            <svg
              *ngIf="mealType === 'ontbijt'"
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
              *ngIf="mealType === 'lunch'"
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
              *ngIf="mealType === 'avondeten'"
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
          {{ mealType }}
        </h5>
      </div>
      <div class="p-5 flex-grow flex flex-col">
        <h5
          class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ meal.name }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {{ meal.description }}
        </p>
        <div class="relative w-full h-48 mb-4">
          <div class="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <img
            class="w-full h-full object-cover rounded-lg"
            [src]="meal.image"
            [alt]="meal.name"
          />
        </div>
      </div>
      <div class="p-5 pt-0">
        <div class="flex flex-wrap gap-2 mb-3">
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >Eiwitten: {{ meal.protein }}g</span
          >
          <span
            class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
            >Koolhydraten: {{ meal.carbs }}g</span
          >
          <span
            class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
            >Vetten: {{ meal.fat }}g</span
          >
          <span
            class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
            >Bereidingstijd: {{ meal.preparationTime }} min</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span
            class="text-sm font-bold text-gray-900 dark:text-white flex items-center"
          >
            <svg
              class="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {{ meal.calories }} kcal
          </span>
          <a
            [routerLink]="['/recipe', mealType]"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Bekijk Recept
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class MealCardComponent {
  @Input() mealType!: string;
  @Input() meal!: Meal;
}
