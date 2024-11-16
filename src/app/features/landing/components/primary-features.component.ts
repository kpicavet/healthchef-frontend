import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';

@Component({
  selector: 'app-primary-features',
  standalone: true,
  template: ` <section
    id="features"
    aria-label="Features for running your books"
    class="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
  >
    <img
      src="images/background-features.jpg"
      class="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
      alt=""
      [width]="2245"
      [height]="1636"
    />

    <app-container classes="relative">
      <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2
          class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Jouw ultieme hulpmiddel voor maaltijdplanning
        </h2>
        <p class="mt-6 text-lg tracking-tight text-blue-100">
          Plan, organiseer en volg je maaltijden met gemak - van recepten tot
          boodschappenlijstjes
        </p>
      </div>
      @if (features) {
      <div
        class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
      >
        <div
          class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
        >
          <div
            class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
          >
            @for (feature of features; track featureIndex; let featureIndex =
            $index) {
            <div
              class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
            >
              <div
                class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
              >
                <div
                  (click)="selectedIndex = featureIndex"
                  [class]="
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 cursor-pointer' +
                    (selectedIndex === featureIndex
                      ? ' bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                      : ' hover:bg-white/10 lg:hover:bg-white/5')
                  "
                >
                  <h3>
                    <div
                      [class]="
                        'font-display text-lg ui-not-focus-visible:outline-none' +
                        (selectedIndex === featureIndex
                          ? ' text-blue-600 lg:text-white'
                          : ' text-blue-100 hover:text-white lg:text-white')
                      "
                    >
                      <span
                        class="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"
                      ></span>
                      {{ feature.title }}
                    </div>
                  </h3>
                  <p
                    [class]="
                      'mt-2 hidden text-sm lg:block' +
                      (selectedIndex === featureIndex
                        ? ' text-white'
                        : ' text-blue-100 group-hover:text-white')
                    "
                  >
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
        @if (features[selectedIndex]) {
        <div class="lg:col-span-7">
          <div class="relative sm:px-6 lg:hidden">
            <div
              class="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
            ></div>
            <p
              class="relative mx-auto max-w-2xl text-base text-white sm:text-center"
            >
              {{ features[selectedIndex].description }}
            </p>
          </div>
          <div
            class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
          >
            <img
              class="w-full"
              [src]="features[selectedIndex].image"
              alt=""
              priority
              [sizes]="
                '(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem'
              "
            />
          </div>
        </div>
        }
      </div>
      }
    </app-container>
  </section>`,
  imports: [ContainerComponent],
})
export class PrimaryFeaturesComponent {
  selectedIndex = 0;
  features = [
    {
      title: 'Maaltijden plannen',
      description:
        'Houd gemakkelijk bij wat je eet en plan je maaltijden vooruit. Ontvang suggesties op basis van jouw voorkeuren en dieet.',
      image: '/images/screenshots/expenses.png',
    },
    {
      title: 'Boodschappenlijstjes',
      description:
        'Alle ingrediënten die je nodig hebt op één plek, automatisch gegenereerd op basis van je maaltijdplanning.',
      image: '/images/screenshots/payroll.png',
    },
    {
      title: 'Recepten beheren',
      description:
        'Bewaar en organiseer je favoriete recepten. Voeg nieuwe recepten toe en krijg gepersonaliseerde aanbevelingen.',
      image: '/images/screenshots/reporting.png',
    },
    {
      title: 'Voedingswaarde tracking',
      description:
        'Houd eenvoudig de voedingswaarden van je maaltijden bij en zorg ervoor dat je altijd een gebalanceerd dieet hebt.',
      image: '/images/screenshots/vat-returns.png',
    },
  ];
}
