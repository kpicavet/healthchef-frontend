import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  template: `<div
    class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    [ngClass]="extraClasses"
  >
    <ng-content></ng-content>
  </div>`,
  imports: [NgClass],
})
export class ContainerComponent {
  @Input() classes: string = '';

  get extraClasses() {
    return Object.fromEntries(this.classes.split(' ').map((k) => [k, true]));
  }
}
