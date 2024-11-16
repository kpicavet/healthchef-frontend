import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  template: `<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        [routerLink]="['/home']"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="/images/logo.svg" class="h-8" alt="Health chef Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Health chef</span
        >
      </a>
      @if(auth.user$ | async; as user) {
      <div
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            [src]="user.picture"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">{{
              user.nickname
            }}</span>
            <span
              class="block text-sm  text-gray-500 truncate dark:text-gray-400"
              >{{ user.email }}</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                [routerLink]="['/application/settings']"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Instellingen</a
              >
            </li>

            <li>
              <a
                (click)="logout()"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Afmelden</a
              >
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      }
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          @for(item of navItems; track $index) {

          <li>
            <a
              [routerLink]="item.url"
              [routerLinkActive]="
                'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
              "
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ item.label }}</a
            >
          </li>
          }
        </ul>
      </div>
    </div>
  </nav> `,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
})
export class NavBarComponent {
  auth = inject(AuthService);

  navItems = [
    {
      label: 'Home',
      url: '/application/home',
    },
    {
      label: 'Planning',
      url: '/application/planning/week/current',
    },
    {
      label: 'Recepten',
      url: '/application/recipes',
    },
    {
      label: 'Boodschappen',
      url: '/application/shopping-list',
    },
  ];

  ngOnInit() {
    setTimeout(() => {
      initFlowbite();
    });
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: document.location.origin },
    });
  }
}
