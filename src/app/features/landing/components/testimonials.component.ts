import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ContainerComponent],
  template: `<section
    id="testimonials"
    aria-label="What our customers are saying"
    class="bg-slate-50 py-20 sm:py-32"
  >
    <app-container>
      <div class="mx-auto max-w-2xl md:text-center">
        <h2
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Loved by businesses worldwide.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        @for(column of testimonials; track index; let index = $index) {

        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            @for(testimonial of column; track testimonialIndex; let
            testimonialIndex = $index) {
            <li>
              <figure
                class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
              >
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  class="absolute left-6 top-6 fill-slate-100"
                >
                  <path
                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                  />
                </svg>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">
                    {{ testimonial.content }}
                  </p>
                </blockquote>
                <figcaption
                  class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                >
                  <div>
                    <div class="font-display text-base text-slate-900">
                      {{ testimonial.author.name }}
                    </div>
                    <div class="mt-1 text-sm text-slate-500">
                      {{ testimonial.author.role }}
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img
                      class="h-14 w-14 object-cover"
                      [src]="testimonial.author.image"
                      alt=""
                      [width]="56"
                      [height]="56"
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
            }
          </ul>
        </li>

        }
      </ul>
    </app-container>
  </section>`,
})
export class TestimonialsComponent {
  testimonials = [
    [
      {
        content:
          'Healthy Chef is zo eenvoudig te gebruiken dat ik me afvraag hoe ik ooit zonder heb gekund. Het maakt maaltijdplanning een fluitje van een cent!',
        author: {
          name: 'Sanne de Vries',
          role: 'CEO bij Van den Berg B.V.',
          image: '/images/avatars/avatar-1.png',
        },
      },
      {
        content:
          'Met Healthy Chef kan ik eindelijk mijn maaltijden zonder stress plannen. De app is intuïtief en heeft mijn leven veel gemakkelijker gemaakt.',
        author: {
          name: 'Eva Jansen',
          role: 'Directeur bij Fresh Foods Ltd.',
          image: '/images/avatars/avatar-4.png',
        },
      },
    ],
    [
      {
        content:
          'Healthy Chef heeft mijn maaltijdplanning volledig getransformeerd. Het is nu veel eenvoudiger om alles georganiseerd te houden, en ik geniet meer van mijn maaltijden.',
        author: {
          name: 'Mark de Groot',
          role: 'Oprichter van De Groot & Co.',
          image: '/images/avatars/avatar-5.png',
        },
      },
      {
        content:
          'Wat ik het meeste waardeer aan Healthy Chef is hoe het mijn weekmenu’s vereenvoudigt. De app biedt alles wat ik nodig heb om gezond en gevarieerd te eten.',
        author: {
          name: 'Lotte Bakker',
          role: 'COO bij Van der Meer Groep',
          image: '/images/avatars/avatar-2.png',
        },
      },
    ],
    [
      {
        content:
          'Met Healthy Chef heb ik eindelijk een betrouwbare manier gevonden om mijn maaltijden te plannen. Het heeft mijn keukenervaring echt verbeterd.',
        author: {
          name: 'Joris van Dijk',
          role: 'Oprichter van Van Dijk Ltd.',
          image: '/images/avatars/avatar-3.png',
        },
      },
    ],
  ];
}
