import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <p [attr.data-slot]="'text'" [ngClass]="textClass"><ng-content></ng-content></p>
  `
})
export class TextComponent {
  @Input() className!: string;

  get textClass() {
    return `${this.className} text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400`;
  }
}
