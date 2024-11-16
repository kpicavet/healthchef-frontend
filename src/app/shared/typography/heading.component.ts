import { Component, Input } from '@angular/core';
import {
  NgClass,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
} from '@angular/common';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  selector: 'app-heading',
  standalone: true,
  template: `
    <ng-container [ngSwitch]="level">
      <h1 *ngSwitchCase="1" [ngClass]="classes" [attr.aria-level]="level">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </h1>
      <h2 *ngSwitchCase="2" [ngClass]="classes" [attr.aria-level]="level">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </h2>
      <h3 *ngSwitchCase="3" [ngClass]="classes" [attr.aria-level]="level">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </h3>
      <h4 *ngSwitchCase="4" [ngClass]="classes" [attr.aria-level]="level">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </h4>
      <h5 *ngSwitchCase="5" [ngClass]="classes" [attr.aria-level]="level">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </h5>
      <h6 *ngSwitchCase="6" [ngClass]="classes" [attr.aria-level]="level">
        <ng-container [ngTemplateOutlet]="content"></ng-container>
      </h6>
    </ng-container>
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  imports: [NgSwitch, NgSwitchCase, NgTemplateOutlet, NgClass],
})
export class HeadingComponent {
  @Input() level: HeadingLevel = 1;
  @Input() className: string = '';

  get classes(): { [key: string]: boolean } {
    return {
      [this.className]: true,
      'text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white':
        true,
    };
  }
}
