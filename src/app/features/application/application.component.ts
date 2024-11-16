import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../core/layout/nav-bar.component';
import { AuthService } from '@auth0/auth0-angular';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: ` <div
    class="relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950"
  >
    <header class="flex items-center px-4">
      <div class="py-2.5 lg:hidden"></div>
      <div class="min-w-0 flex-1">
        <app-nav-bar />
      </div>
    </header>

    <main class="flex flex-1 flex-col pb-2 lg:px-2">
      <div
        class="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"
      >
        <div class="mx-auto max-w-6xl"><router-outlet /></div>
      </div>
    </main>
  </div>`,
})
export class ApplicationComponent {
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          initFlowbite();
        });
      }
    });
  }
}
