import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-price-card',
  standalone: true,
  template: `<section
    class="flex flex-col rounded-3xl px-6 sm:px-8"
    [ngClass]="{
                'order-first bg-blue-600 py-8 lg:order-none': featured,
                'lg:py-8': !featured,
            }"
  >
    <h3 class="mt-5 font-display text-lg text-white">{{ name }}</h3>
    <p
      class="mt-2 text-base"
      [ngClass]="{
    'text-white': featured,
    'text-slate-400': !featured,
  }"
    >
      {{ description }}
    </p>
    <p
      class="order-first font-display text-5xl font-light tracking-tight text-white"
    >
      €{{ price }}
    </p>
    <ul
      role="list"
      class="order-last mt-10 flex flex-col gap-y-3 text-sm"
      [ngClass]="{
    'text-white': featured,
    'text-slate-200': !featured,
  }"
    >
      @for(feature of features; track $index) {
      <li class="flex">
        <svg
          [ngClass]="{
    'text-white': featured,
    'text-slate-400': !featured,
  }"
          aria-hidden="true"
          class="h-6 w-6 flex-none fill-current stroke-current"
        >
          <path
            d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
            strokeWidth="{0}"
          />
          <circle
            cx="{12}"
            cy="{12}"
            r="{8.25}"
            fill="none"
            strokeWidth="{1.5}"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span class="ml-4">{{ feature }}</span>
      </li>
      }
    </ul>
    <app-button
      [href]="href"
      [variant]="featured ? 'solid' : 'outline'"
      color="white"
      class="mt-8"
    >
      Get started
    </app-button>
  </section>`,
  imports: [NgClass, ButtonComponent],
})
export class PriceCardComponent {
  @Input() name: string = '';
  @Input() href: string = '';
  @Input() featured: boolean = false;
  @Input() features: string[] = [];
  @Input() description: string = '';
  @Input() price: number = 0;
}
