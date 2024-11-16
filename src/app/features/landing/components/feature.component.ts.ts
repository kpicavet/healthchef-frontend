import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';
import { NgClass } from '@angular/common';
import { BypassHtmlSanitizerPipe } from '../../../shared/button/pipes/bypass-html-sanitizer.pipe';

interface Feature {
  name: string;
  summary: string;
  description: string;
  image: string;
  icon: string;
}

@Component({
  selector: 'app-feature',
  standalone: true,
  template: `<div
    class="cursor-pointer"
    [ngClass]="{
      'opacity-75 hover:opacity-100': !isActive
    }"
  >
    <div
      class="w-9 rounded-lg"
      [ngClass]="{
        'bg-blue-600': isActive,
        'bg-slate-500': !isActive
      }"
    >
      <svg
        aria-hidden="true"
        class="h-9 w-9"
        fill="none"
        [innerHTML]="feature.icon | bypassHtmlSanitizer"
      ></svg>
    </div>
    <h3
      class="mt-6 text-sm font-medium"
      [ngClass]="{
        'text-blue-600': isActive,
        'text-slate-600': !isActive
      }"
    >
      {{ feature.name }}
    </h3>
    <p class="mt-2 font-display text-xl text-slate-900">
      {{ feature.summary }}
    </p>
    <p class="mt-4 text-sm text-slate-600">{{ feature.description }}</p>
  </div>`,
  imports: [ContainerComponent, NgClass, BypassHtmlSanitizerPipe],
})
export class FeatureComponent {
  @Input() isActive: boolean = false;
  @Input({ required: true }) feature!: Feature;
}
