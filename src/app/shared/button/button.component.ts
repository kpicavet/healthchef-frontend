import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none',
  soft:
    'group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    indigo: 'bg-indigo-600 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    blue: '',
    indigo: 'ring-indigo-200 text-indigo-700 hover:text-indigo-900 hover:ring-indigo-300 active:bg-indigo-100 active:text-indigo-600 focus-visible:outline-blue-600 focus-visible:ring-indigo-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
  soft: {
    slate:
      'bg-slate-50 text-slate-600  hover:bg-slate-100',
    blue: '',
    indigo: 'bg-indigo-50 text-indigo-600  hover:bg-indigo-100',
    white:
      'bg-white text-slate-600  hover:bg-slate-100',
  },
};

type Variant = 'solid' | 'outline' | 'soft';
type Color = 'slate' | 'blue' | 'white' | 'indigo';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    @if(href !== undefined) {
    <a [href]="href" [ngClass]="classes">
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container
    ></a>
    } @else {
    <button [ngClass]="classes" (click)="onClick.emit($event)">
      <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
    </button>
    }
    <ng-template #contentTpl><ng-content></ng-content></ng-template>
  `,
  imports: [NgClass, NgTemplateOutlet],
})
export class ButtonComponent implements OnInit {
  @Input() variant: Variant = 'solid';
  @Input() color: Color = 'slate';
  @Input() href: string | undefined;
  @Input() class: string | undefined;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  classes!: { [key: string]: boolean };

  ngOnInit() {
    this.setClasses();
  }

  setClasses() {
    this.classes = {
      [baseStyles[this.variant]]: true,
      [variantStyles[this.variant][this.color]]: true,
      [this.class?? '']: true,
    };
  }
}
