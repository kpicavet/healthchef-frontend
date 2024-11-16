import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from './container.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer class="bg-slate-50">
    <app-container>
      <div class="py-16">
        <svg
          class="mx-auto h-10 w-auto"
          width="800px"
          height="800px"
          viewBox="-1.5 0 255 255"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
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
        <nav class="mt-10 text-sm" aria-label="quick links">
          <div class="-my-1 flex justify-center gap-x-6">
            <a
              href="#features"
              class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >Kenmerken</a
            >
            <a
              href="#testimonials"
              class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >Reviews</a
            >
            <a
              href="#pricing"
              class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >Prijzen</a
            >
          </div>
        </nav>
      </div>
      <div
        class="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"
      >
        <div class="flex gap-x-6"></div>
        <p class="mt-6 text-sm text-slate-500 sm:mt-0">
          Copyright &copy; {{ currentYear }} Healthy Chef. Alle rechten
          voorbehouden.
        </p>
      </div>
    </app-container>
  </footer>`,
  imports: [RouterLink, ContainerComponent],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
