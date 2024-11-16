import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  startOfWeek,
  endOfWeek,
  isToday,
  isSameMonth,
  isSameDay,
  addWeeks,
  subWeeks,
  startOfDay,
} from 'date-fns';
import { nl } from 'date-fns/locale';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  meals?: {
    ontbijt?: {
      name: string;
    };
    lunch?: {
      name: string;
    };
    avondeten?: {
      name: string;
    };
  };
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <!-- Calendar Header -->
      <div
        class="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-8 space-y-4 sm:space-y-0"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900">
          {{ currentMonth }}
        </h2>
        <div class="flex items-center space-x-2 sm:space-x-4">
          <button
            (click)="previousPeriod()"
            class="p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            (click)="today()"
            class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-md"
          >
            Vandaag
          </button>
          <button
            (click)="nextPeriod()"
            class="p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Week View -->
      <div class="sm:hidden">
        <div class="space-y-4">
          @for(day of currentWeekDays; track $index) {
          <div
            [class]="
              'bg-white rounded-lg shadow overflow-hidden' +
              (day.isToday ? ' ring-2 ring-blue-500' : '')
            "
          >
            <!-- Day Header -->
            <div
              class="p-4 cursor-pointer"
              [class.bg-blue-50]="day.isToday"
              (click)="toggleDayExpanded(day)"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div
                    [class]="
                      'w-2 h-2 rounded-full' +
                      (day.isToday ? ' bg-blue-500' : ' bg-gray-300')
                    "
                  ></div>
                  <div>
                    <div class="text-lg font-semibold">
                      {{ format(day.date, 'EEEE', { locale: nlLocale }) }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ format(day.date, 'd MMMM', { locale: nlLocale }) }}
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  @if(day.meals) {
                  <div class="flex -space-x-1">
                    @if(day.meals.ontbijt) {
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    } @if(day.meals.lunch) {
                    <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                    } @if(day.meals.avondeten) {
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                    }
                  </div>
                  }
                  <svg
                    class="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                    [class.rotate-180]="expandedDays[day.date.toISOString()]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Expanded Day Content -->
            @if(expandedDays[day.date.toISOString()]) {
            <div class="border-t border-gray-100">
              @if(day.meals) {
              <div class="p-4 space-y-3">
                @if(day.meals.ontbijt) {
                <div
                  class="flex items-center text-sm text-green-600 bg-green-50 rounded-lg p-3"
                >
                  <svg
                    class="w-4 h-4 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span>{{ day.meals.ontbijt.name }}</span>
                </div>
                } @if(day.meals.lunch) {
                <div
                  class="flex items-center text-sm text-yellow-600 bg-yellow-50 rounded-lg p-3"
                >
                  <svg
                    class="w-4 h-4 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>{{ day.meals.lunch.name }}</span>
                </div>
                } @if(day.meals.avondeten) {
                <div
                  class="flex items-center text-sm text-blue-600 bg-blue-50 rounded-lg p-3"
                >
                  <svg
                    class="w-4 h-4 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                  </svg>
                  <span>{{ day.meals.avondeten.name }}</span>
                </div>
                }
              </div>
              } @else {
              <div class="p-4 text-sm text-gray-500 italic text-center">
                Geen maaltijden gepland
              </div>
              }
            </div>
            }
          </div>
          }
        </div>
      </div>

      <!-- Desktop Calendar Grid -->
      <div class="hidden sm:block bg-white rounded-lg shadow overflow-hidden">
        <!-- Days of Week Header -->
        <div
          class="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-50"
        >
          @for(day of ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']; track $index)
          {
          <div
            class="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
          >
            {{ day }}
          </div>
          }
        </div>

        <!-- Calendar Days -->
        <div class="grid grid-cols-7 gap-px bg-gray-200">
          @for(week of weeks; track $index) { @for(day of week; track $index) {
          <div [class]="getDayClasses(day)" (click)="selectDate(day.date)">
            <div class="p-2">
              <div class="text-right text-sm">
                {{ format(day.date, 'd') }}
              </div>
              @if(day.meals) {
              <div class="mt-2 space-y-1">
                @if(day.meals.ontbijt) {
                <div
                  class="flex items-center text-xs text-green-600 bg-green-50 rounded p-1"
                >
                  <svg
                    class="w-3 h-3 mr-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span class="truncate">{{ day.meals.ontbijt.name }}</span>
                </div>
                } @if(day.meals.lunch) {
                <div
                  class="flex items-center text-xs text-yellow-600 bg-yellow-50 rounded p-1"
                >
                  <svg
                    class="w-3 h-3 mr-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="truncate">{{ day.meals.lunch.name }}</span>
                </div>
                } @if(day.meals.avondeten) {
                <div
                  class="flex items-center text-xs text-blue-600 bg-blue-50 rounded p-1"
                >
                  <svg
                    class="w-3 h-3 mr-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                  </svg>
                  <span class="truncate">{{ day.meals.avondeten.name }}</span>
                </div>
                }
              </div>
              }
            </div>
          </div>
          } }
        </div>
      </div>
    </div>
  `,
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  weeks: CalendarDay[][] = [];
  currentWeekDays: CalendarDay[] = [];
  expandedDays: { [key: string]: boolean } = {};
  nlLocale = nl;

  get currentMonth(): string {
    return format(this.currentDate, 'MMMM yyyy', { locale: this.nlLocale });
  }

  ngOnInit() {
    this.generateCalendar();
    this.generateCurrentWeek();
  }

  generateCurrentWeek() {
    const start = startOfWeek(this.currentDate, { weekStartsOn: 1 });
    const days = eachDayOfInterval({
      start,
      end: addWeeks(start, 1),
    });

    this.currentWeekDays = days.map((date) => ({
      date,
      isCurrentMonth: isSameMonth(date, this.currentDate),
      isToday: isToday(date),
      meals: this.getMealsForDate(date),
    }));

    // Auto-expand today's entry
    const today = this.currentWeekDays.find((day) => day.isToday);
    if (today) {
      this.expandedDays[today.date.toISOString()] = true;
    }
  }

  generateCalendar() {
    const start = startOfWeek(startOfMonth(this.currentDate), {
      weekStartsOn: 1,
    });
    const end = endOfWeek(endOfMonth(this.currentDate), { weekStartsOn: 1 });
    const days = eachDayOfInterval({ start, end });

    this.weeks = [];
    let currentWeek: CalendarDay[] = [];

    days.forEach((date) => {
      if (currentWeek.length > 0 && getDay(date) === 1) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push({
        date,
        isCurrentMonth: isSameMonth(date, this.currentDate),
        isToday: isToday(date),
        meals: this.getMealsForDate(date),
      });
    });

    if (currentWeek.length > 0) {
      this.weeks.push(currentWeek);
    }
  }

  getMealsForDate(date: Date): CalendarDay['meals'] | undefined {
    if (isToday(date)) {
      return {
        ontbijt: { name: 'Havermout met Bessen' },
        lunch: { name: 'Gegrilde Kip Salade' },
        avondeten: { name: 'Gebakken Zalm' },
      };
    }
    if (
      isSameDay(
        date,
        new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate() + 1
        )
      )
    ) {
      return {
        ontbijt: { name: 'Yoghurt met Granola' },
        lunch: { name: 'Quinoa Salade' },
        avondeten: { name: 'Pasta Pesto' },
      };
    }
    return undefined;
  }

  getDayClasses(day: CalendarDay): string {
    return `min-h-[120px] relative bg-white p-1 hover:bg-gray-50 cursor-pointer ${
      !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
    } ${day.isToday ? 'bg-blue-50' : ''}`;
  }

  previousPeriod() {
    if (window.innerWidth < 640) {
      // Mobile: Navigate by week
      this.currentDate = subWeeks(this.currentDate, 1);
      this.generateCurrentWeek();
    } else {
      // Desktop: Navigate by month
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      );
      this.generateCalendar();
    }
  }

  nextPeriod() {
    if (window.innerWidth < 640) {
      // Mobile: Navigate by week
      this.currentDate = addWeeks(this.currentDate, 1);
      this.generateCurrentWeek();
    } else {
      // Desktop: Navigate by month
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      );
      this.generateCalendar();
    }
  }

  today() {
    this.currentDate = new Date();
    if (window.innerWidth < 640) {
      this.generateCurrentWeek();
    } else {
      this.generateCalendar();
    }
  }

  toggleDayExpanded(day: CalendarDay) {
    const dateKey = day.date.toISOString();
    this.expandedDays[dateKey] = !this.expandedDays[dateKey];
  }

  selectDate(date: Date) {
    console.log('Selected date:', format(date, 'yyyy-MM-dd'));
  }

  format(date: Date, formatStr: string, options?: any): string {
    return format(date, formatStr, { ...options, locale: this.nlLocale });
  }
}
