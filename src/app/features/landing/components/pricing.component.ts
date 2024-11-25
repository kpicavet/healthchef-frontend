import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { PriceCardComponent } from './price-card.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  template: ` <section
    id="pricing"
    aria-label="Pricing"
    class="bg-slate-900 py-20 sm:py-32"
  >
    <app-container>
      <div class="md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          <span class="relative whitespace-nowrap">
            <svg
              aria-hidden="true"
              viewBox="0 0 281 40"
              preserveAspectRatio="none"
              class="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
              />
            </svg>
            <span class="relative">Eenvoudige prijzen,</span>
          </span>
          voor iedereen.
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Het maakt niet uit hoeveel maaltijden je plant, onze app past zich aan
          jouw behoeften aan.
        </p>
      </div>
      <div
        class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
      >
        <app-price-card
          name="Gratis"
          [price]="0"
          description="Perfect voor beginners die de basisfuncties willen verkennen."
          href="/register"
          [features]="[
            'Beperk aantal recepten opslaan',
            'Basis maaltijdplanning (1 dag)',
            'Handmatig boodschappenlijstjes maken',
            'Basis kookinstructies',
            'Beperkte voedingsadvies'
          ]"
        ></app-price-card>
        <app-price-card
          [featured]="true"
          name="Standaard"
          [price]="5"
          description="Ideaal voor diegenen die meer functionaliteit willen."
          href="/register"
          [features]="[
            'Onbeperkt recepten opslaan',
            'Uitgebreide  maaltijdplanning (7 dagen)',
            'Automatische boodschappenlijstjes',
            'Gedetailleerde kookinstructies',
            'Gepersonaliseerd voedingsadvies'
          ]"
        ></app-price-card>
        <app-price-card
          name="Premium"
          [price]="8"
          description="Voor iedereen die toegang wil tot alle functies en extra's."
          href="/register"
          [features]="[
            'Alle Standaard functies',
            'Uitgebreide maaltijdplanning (30 dagen)',
            'Voedingswaarde tracking',
            'Weekmenus creëren',
            'Dieet- en allergiebeheer',
            'Premium klantenondersteuning'
          ]"
        ></app-price-card>
      </div>
    </app-container>
  </section>`,
  imports: [ContainerComponent, PriceCardComponent],
})
export class PricingComponent {}
