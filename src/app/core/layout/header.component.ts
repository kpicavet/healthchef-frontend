import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { ContainerComponent } from './container.component';
import { AuthService } from '@auth0/auth0-angular';
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header class="py-10">
    <app-container>
      <nav>
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between"
        >
          <a
            [routerLink]="['/home']"
            aria-label="Home"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              width="800px"
              height="800px"
              viewBox="-1.5 0 255 255"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              class="h-10 w-auto"
            >
              <g fillRule="evenodd">
                <path
                  d="M240.543 81.794l-80.463 21.56-11.794-11.794 21.56-80.463C171.99 3.095 180.215-1.654 188.217.491c8.002 2.144 12.751 10.369 10.607 18.371l-12.429 46.383 46.383-12.429c8.002-2.144 16.227 2.605 18.372 10.607 2.144 8.002-2.605 16.227-10.607 18.371z"
                  fill="#4cebc0"
                />
                <path
                  d="M237.622 14.018c5.858 5.858 5.858 15.356 0 21.214l-67.175 67.175-21.214-21.213 67.176-67.176c5.857-5.857 15.355-5.857 21.213 0z"
                  fill="#00e2a5"
                />
                <path
                  d="M199.248 152.901c-2.829 1.414-172.344 97.291-172.344 97.291-9.077 5.117-16.379 6.249-22.628 0-6.248-6.248-5.117-13.55 0-22.627 0 0 95.877-169.516 97.292-172.344 1.414-2.829 11.057-16.292 24.331-3.019l76.367 76.368c13.274 13.273-.19 22.917-3.018 24.331z"
                  fill="#fc9502"
                />
                <path
                  d="M132.97 152.611a4 4 0 015.657 0l22.007 22.008-7.232 4.082-20.432-20.433a4 4 0 010-5.657zm-77.782 24.042l24.042 24.042a4 4 0 01-5.657 5.657L49.531 182.31a4 4 0 015.657-5.657zm-24.042 35.355a4 4 0 01-5.656 0l-7.932-7.931 4.087-7.227 9.501 9.502a3.997 3.997 0 010 5.656zm45.255-56.568l-20.03-20.03 4.085-7.23 21.602 21.603a4 4 0 01-5.657 5.657zm65.761-47.376a4 4 0 01-5.657 0l-24.041-24.042a4 4 0 015.657-5.657l24.041 24.042a4 4 0 010 5.657z"
                  fill="#ff5134"
                />
              </g>
            </svg>
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Healthy chef</span
            >
          </a>
          <app-button class="md:hidden" href="/api/auth/signup" color="blue"
            >Registreer</app-button
          >
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
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
          <div
            class="hidden w-full md:flex md:w-auto md:gap-8 md:items-center"
            id="navbar-default"
          >
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <a
                  routerLink="/features"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                  >Features</a
                >
              </li>
              <li>
                <a
                  routerLink="/testimonials"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >testimonials</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="/pricing"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Pricing</a
                >
              </li>
              <li
                class="border-t border-solid border-slate-300/40 mt-2 pt-2 md:border-none md:mt-0 md:pt-0 md:pl-12 cursor-pointer"
              >
                <a *ngIf="(auth.isAuthenticated$ | async) === false"
                  (click)="
                    auth.loginWithRedirect({
                      appState: { target: '/application' }
                    })
                  "
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Log in
                </a>
              </li>
            </ul>
            <div class="hidden md:flex cursor-pointer" *ngIf="(auth.isAuthenticated$ | async) === false">
              <app-button href="/api/auth/signup" color="blue"
                >Registreer</app-button
              >
            </div>
            <div class="hidden md:flex cursor-pointer" *ngIf="auth.isAuthenticated$ | async">
              <app-button href="/application/home" color="blue"
                >Naar Healthy Chef</app-button
              >
            </div>
          </div>
        </div>
      </nav>
    </app-container>
  </header>`,
  imports: [RouterLink, RouterLinkActive, ButtonComponent, ContainerComponent, NgIf, AsyncPipe],
})
export class HeaderComponent {
  auth = inject(AuthService);
}
