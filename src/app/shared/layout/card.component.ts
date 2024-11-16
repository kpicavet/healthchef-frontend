import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <div class="px-4 py-5 sm:p-6">
        <ng-content>
        </ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
}
