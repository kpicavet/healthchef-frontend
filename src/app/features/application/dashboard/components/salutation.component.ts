import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { LoadingScreenComponent } from './loading-screen.component';
import { AuthService } from '@auth0/auth0-angular';

interface WeekOption {
  weekNumber: number;
  startDate: string;
}

@Component({
  selector: 'app-salutation',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingScreenComponent],
  template: `
    <div
      class="p-4 mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg relative overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="Food background"
          class="object-cover w-full h-full opacity-10"
        />
      </div>
      <div class="relative z-10 flex flex-col md:flex-row items-center">
        <div class="md:w-2/3 pr-4">
          <h2
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            Hi {{ (auth.user$ | async)?.nickname }}, Welkom bij Jouw
            Maaltijdplanner!
          </h2>
          <p class="mb-6 text-lg font-normal text-gray-200 lg:text-xl">
            Plan je maaltijden, eet gezonder en bereik je doelen.
          </p>
          <div
            class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <button
              (click)="openWeekSelector()"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
              Genereer Maaltijdplan
            </button>
            <button
              (click)="goToCalendar()"
              type="button"
              class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Bekijk Kalender
            </button>
          </div>
        </div>
        <div class="md:w-1/3 mt-8 md:mt-0">
          <div
            class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6"
          >
            <h3 class="mb-4 text-2xl font-bold text-white">Snelle Tips</h3>
            <ul class="space-y-3 text-gray-200">
              <li
                class="flex items-center bg-white bg-opacity-10 rounded-lg p-2"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Blijf gehydrateerd! Streef naar 8 glazen water per dag.</span
                >
              </li>
              <li
                class="flex items-center bg-white bg-opacity-10 rounded-lg p-2"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Voeg een verscheidenheid aan kleurrijke groenten toe aan je
                  maaltijden.</span
                >
              </li>
              <li
                class="flex items-center bg-white bg-opacity-10 rounded-lg p-2"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Sla het ontbijt niet over - het start je metabolisme!</span
                >
              </li>
              <li
                class="flex items-center bg-white bg-opacity-10 rounded-lg p-2"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span
                  >Probeer in het weekend maaltijden voor te bereiden voor
                  gemakkelijkere weekdagen.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Week Selector Modal -->
    <div
      *ngIf="showWeekSelector"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50"
      (click)="closeWeekSelector()"
    >
      <div class="relative p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
            Selecteer Week
          </h3>
          <select
            [(ngModel)]="selectedWeek"
            class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option [ngValue]="null" disabled selected>Kies een week</option>
            <option *ngFor="let week of weeks" [ngValue]="week.weekNumber">
              Week {{ week.weekNumber }} ({{ week.startDate }})
            </option>
          </select>
          <div class="mt-6">
            <button
              (click)="generateMealPlan()"
              [disabled]="!selectedWeek"
              [class.opacity-50]="!selectedWeek"
              [class.cursor-not-allowed]="!selectedWeek"
              class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Genereer
            </button>
          </div>
        </div>
      </div>
    </div>

    <app-loading-screen *ngIf="isLoading"></app-loading-screen>
  `,
})
export class SalutationComponent implements OnInit {
  @Input() isLoading: boolean = false;

  showWeekSelector: boolean = false;
  selectedWeek: number | null = null;
  weeks: WeekOption[] = [];

  router = inject(Router);
  auth = inject(AuthService);

  @Output() generate: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.generateWeeks();
  }

  openWeekSelector(): void {
    this.showWeekSelector = true;
  }

  generateWeeks(): void {
    const currentDate = new Date();
    const currentWeek = this.getWeekNumber(currentDate);

    // Find the date of the Monday of the current week
    const dayOfWeek = currentDate.getDay(); // Sunday - Saturday : 0 - 6
    const daysUntilMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Sunday as the start of the week
    const mondayOfCurrentWeek = new Date(currentDate);
    mondayOfCurrentWeek.setDate(currentDate.getDate() - daysUntilMonday);

    for (let i = 0; i < 4; i++) {
      const weekNumber = currentWeek + i;
      const startDate = new Date(mondayOfCurrentWeek);
      startDate.setDate(mondayOfCurrentWeek.getDate() + i * 7); // Add 7 days for each week
      this.weeks.push({
        weekNumber,
        startDate: startDate.toLocaleDateString('nl-NL', {
          month: 'long',
          day: 'numeric',
        }),
      });
    }
  }

  getWeekNumber(date: Date): number {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  }

  generateMealPlan(): void {
    if (this.selectedWeek) {
      this.showWeekSelector = false;
      this.generate.emit(this.selectedWeek);
    }
  }

  goToCalendar(): void {
    // TODO: Implement navigation to calendar page
    this.router.navigate(['/calendar']);
  }

  closeWeekSelector(): void {
    this.showWeekSelector = false;
  }
}
