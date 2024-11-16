import { Component, Input } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-text-link',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  template: `
    <a [routerLink]="routerLink" [ngClass]="linkClass"><ng-content></ng-content></a>
  `
})
export class TextLinkComponent {
  @Input() className!: string;
  @Input() routerLink!: string;

  get linkClass() {
    return `${this.className} text-zinc-950 underline decoration-zinc-950/50 hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 hover:dark:decoration-white`;
  }
}
