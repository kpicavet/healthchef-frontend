import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';
import { FeatureComponent } from './feature.component.ts';
import { NgClass } from '@angular/common';

interface Feature {
  name: string;
  summary: string;
  description: string;
  image: string;
  icon: string;
}

const features: Array<Feature> = [
  {
    name: "Weekmenu's",
    summary:
      "Creëer en beheer eenvoudig weekmenu's voor een gestructureerde maaltijdplanning.",
    description:
      'Plan je maaltijden voor de hele week en bespaar tijd en stress bij het bedenken van wat je elke dag moet eten.',
    image: '/images/screenshots/contacts.png',
    icon: `<defs><linearGradient id=":R5dnbpkq:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse"><stop offset=".194" stop-color="#fff"></stop><stop offset="1" stop-color="#FFA500"></stop></linearGradient></defs><path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:R5dnbpkq:)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>`,
  },
  {
    name: 'Voedingsadvies',
    summary:
      'Ontvang gepersonaliseerd voedingsadvies gebaseerd op jouw dieet en voorkeuren.',
    description:
      'Houd je dieet in balans met voedingsadvies en suggesties die passen bij jouw levensstijl en gezondheidsdoelen.',
    image: '/images/screenshots/inventory.png',
    icon: ` <path
                opacity=".5"
                d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                fill="#fff"
            />
            <path
                opacity=".3"
                d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                fill="#fff"
            />
            <path
                d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                fill="#fff"
            />`,
  },
  {
    name: 'Kookinstructies',
    summary: 'Volg stap-voor-stap kookinstructies voor elk recept.',
    description:
      'Met gedetailleerde kookinstructies zorg je ervoor dat elk gerecht perfect wordt, of je nu een beginner of een ervaren kok bent.',
    image: '/images/screenshots/profit-loss.png',
    icon: ` <path
                opacity=".5"
                d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                fill="#fff"
            />
            <path
                d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                fill="#fff"
            />`,
  },
];

@Component({
  selector: 'app-secondary-features',
  standalone: true,
  template: ` <section
    id="secondary-features"
    aria-label="Features for simplifying everyday business tasks"
    class="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
  >
    <app-container>
      <div class="mx-auto max-w-2xl md:text-center">
        <h2
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Verander maaltijdplanning in een eenvoudige taak.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Omdat je geen zin hebt om je maaltijden nog ingewikkelder te maken.
        </p>
      </div>
      <div
        class="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
      >
        @for(feature of features; track index; let index = $index) {
        <div>
          <app-feature
            [feature]="feature"
            class="mx-auto max-w-2xl"
            [isActive]="true"
          />
          <div class="relative mt-10 pb-10">
            <div
              class="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"
            ></div>
            <div
              class="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
            >
              <img
                class="w-full"
                [src]="feature.image"
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
        }
      </div>
      <div class="hidden lg:mt-20 lg:block">
        <div class="grid grid-cols-3 gap-x-8">
          @for(feature of features; track index; let index = $index) {
          <app-feature
            (click)="selectTab(index)"
            [feature]="feature"
            [isActive]="selectedIndex === index"
          />
          }
        </div>
        <div
          class="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16"
        >
          <div class="-mx-5 flex">
            @for(feature of features; track index; let index = $index) {
            <div
              class="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none"
              [ngClass]="{
                'opacity-60': selectedIndex !== index
              }"
              [style.transform]="'translateX(-' + selectedIndex * 100 + '%)'"
            >
              <div
                class="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
              >
                <img [src]="feature.image" alt="" class="w-full" />
              </div>
            </div>
            }
          </div>
          <div
            class="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10"
          ></div>
        </div>
      </div>
    </app-container>
  </section>`,
  imports: [ContainerComponent, FeatureComponent, NgClass],
})
export class SecondaryFeaturesComponent {
  features = features;
  selectedIndex = 0;

  selectTab(index: number) {
    this.selectedIndex = index;
  }
}
