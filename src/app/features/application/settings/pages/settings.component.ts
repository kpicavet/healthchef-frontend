import {Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {SubscriptionService} from "../services/subscription.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {SettingsPricingPlansComponent} from "../components/settings-pricing-plans.component";
import {HeadingComponent} from "../../../../shared/typography/heading.component";
import {ButtonComponent} from "../../../../shared/button/button.component";
import {SubheadingComponent} from "../../../../shared/typography/subheading.component";
import {TextComponent} from "../../../../shared/typography/text.component";
import {TextLinkComponent} from "../../../../shared/typography/text-link.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    HeadingComponent,
    ButtonComponent,
    SubheadingComponent,
    TextComponent,
    TextLinkComponent,
    SettingsPricingPlansComponent,
    NgIf

  ],
  template: `
    <div>
      <div
        class="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <app-heading>Instellingen</app-heading>
      </div>

      @if (subscription$ | async; as subscription) {

        <section class="grid gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
          @if (subscription.priceId !== null) {
            <div class="space-y-1">
              <app-subheading [level]="3">Abonnementen</app-subheading>
              <app-text>Maak wijzigingen aan je bestaande abonnement.</app-text>
            </div>
            <div>
              <app-button [href]="(customerPortalLink$ | async)?.link">Wijzigen</app-button>
            </div>
          }
          @if (subscription.priceId === null) {
            <div class="space-y-1">
              <app-subheading [level]="3">Abonnementen</app-subheading>
              <app-text>Kies je abonnement en start direct.</app-text>
            </div>
            <div *ngIf="(subscriptionLinks$ | async) as subscriptionLinks">
              <app-settings-pricing-plans
                [price1]="subscriptionLinks[0].link"
                [price2]="subscriptionLinks[1].link"
              >
              </app-settings-pricing-plans>
            </div>
          }
        </section>
      }
    </div>`,
})
export class SettingsComponent {
  #subscriptionService = inject(SubscriptionService);

  subscription$!: Observable<any>;
  subscriptionLinks$!: Observable<any>;
  customerPortalLink$!: Observable<any>;

  ngOnInit() {
    this.subscription$ = this.#subscriptionService.getSubscription();
    this.subscriptionLinks$ = this.#subscriptionService.getSubscriptionLinks();
    this.customerPortalLink$ = this.#subscriptionService.getSubscriptionCustomerPortal();
  }

}
