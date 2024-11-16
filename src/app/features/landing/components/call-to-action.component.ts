import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';

@Component({
  selector: 'app-call-to-action',
  template: `<section
    id="get-started-today"
    class="relative overflow-hidden bg-blue-600 py-32"
  >
    <img
      class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      src="images/background-call-to-action.jpg"
      alt=""
      [width]="2347"
      [height]="1244"
      unoptimized
    />
    <app-container classes="relative">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Start vandaag
        </h2>
        <p class="mt-4 text-lg tracking-tight text-white">
          Start vandaag en ontdek hoe eenvoudig maaltijdplanning kan zijn.
          Bespaar tijd, eet gezond en geniet van elke maaltijd!
        </p>
        <Button href="/register" color="white" class="mt-10">
          Krijg 1 maand gratis
        </Button>
      </div>
    </app-container>
  </section>`,
  standalone: true,
  imports: [ContainerComponent],
})
export class CallToActionComponent {}
