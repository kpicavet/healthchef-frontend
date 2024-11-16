import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-settings-pricing-plans',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  template: `
    <ul role="list" class="divide-y divide-gray-100">
      <li
        *ngFor="let person of plans"
        class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
      >
        <div class="flex min-w-0 gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              <a [href]="person.href">
                <span class="absolute inset-x-0 -top-px bottom-0"></span>
                {{ person.name }}
              </a>
            </p>
            <p class="mt-1 flex text-xs leading-5 text-gray-500">
              {{ person.email }}
            </p>
          </div>
        </div>
        <div class="flex shrink-0 items-center gap-x-4">
          <div class="hidden sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">
              <span>{{ person.lastSeen }}</span>
            </p>
            <ng-template #onlineStatus>
              <div class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <p class="text-xs leading-5 text-gray-500">Online</p>
              </div>
            </ng-template>
          </div>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
          </svg>
        </div>
      </li>
    </ul>

  `
})
export class SettingsPricingPlansComponent implements OnInit{
  @Input() price1!: string;
  @Input() price2!: string;
  plans: any = [];


  ngOnInit(): void {
    this.plans = [
      {
        name: 'Premium',
        email: 'Maandelijks opzegbaar',
        role: '€ 8',
        href: this.price1,
        lastSeen: '/ maand',
      },
      {
        name: 'Premium',
        email: 'Voordeligste plan, geniet van 2 gratis maanden',
        role: '€ 80',
        href: this.price2,
        lastSeen: '/ jaar',
      },
    ]

  }
}
