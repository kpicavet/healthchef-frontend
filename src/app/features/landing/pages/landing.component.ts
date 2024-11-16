import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { PrimaryFeaturesComponent } from '../components/primary-features.component';
import { CallToActionComponent } from '../components/call-to-action.component';
import { TestimonialsComponent } from '../components/testimonials.component';
import { FaqsComponent } from '../components/faqs.component';
import { PricingComponent } from '../components/pricing.component';
import { SecondaryFeaturesComponent } from '../components/secondary-features.component';
import { HeaderComponent } from '../../../core/layout/header.component';
import { FooterComponent } from '../../../core/layout/footer.component';

@Component({
  standalone: true,
  template: `<app-header />
    <main>
      <!-- <app-pricing /> -->
      <app-hero /><app-primary-features /><app-secondary-features /><app-call-to-action /><app-testimonials /><app-faqs />
    </main>
    <app-footer />`,
  imports: [
    HeroComponent,
    PrimaryFeaturesComponent,
    CallToActionComponent,
    TestimonialsComponent,
    FaqsComponent,
    PricingComponent,
    SecondaryFeaturesComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class LandingComponent {}
