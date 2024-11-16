import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/layout/container.component';
import { ButtonComponent } from '../../../shared/button/button.component';

const faqs = [
  [
    {
      question: 'Hoeveel kcal mag ik per dag eten?',
      answer:
        'Healthy Chef helpt je met het plannen van maaltijden die passen bij jouw voedingsdoelen. Je kunt je dagelijkse caloriebehoefte instellen op basis van je persoonlijke doelen en voorkeuren.',
    },
    {
      question: 'Kan ik mijn account delen met familieleden?',
      answer:
        'Ja, je kunt je account delen met je familieleden. Zorg ervoor dat ze ook toegang hebben tot de nodige informatie zodat ze de maaltijdplanning kunnen bijhouden.',
    },
    {
      questiodsfn: 'Kan ik recepten opslaan in Healthy Chef?',
      answer:
        'Ja, je kunt je favoriete recepten opslaan en gemakkelijk terugvinden in Healthy Chef. Dit maakt het eenvoudig om je maaltijdplanning te personaliseren en variatie toe te voegen.',
    },
  ],
  [
    {
      question: 'Hoe kan ik mijn maaltijdplanning aanpassen?',
      answer:
        'Je kunt je maaltijdplanning eenvoudig aanpassen via je Healthy Chef dashboard. Voeg nieuwe maaltijden toe, pas bestaande maaltijden aan of plan maaltijden op basis van je voorkeuren.',
    },
    {
      question: 'Kan ik mijn dieetinstellingen aanpassen?',
      answer:
        'Ja, je kunt je dieetinstellingen aanpassen op basis van je persoonlijke behoeften. Healthy Chef biedt opties voor verschillende diëten en voedingsvoorkeuren.',
    },
    {
      question: 'Hoe werkt de boodschappenlijstfunctie?',
      answer:
        'Healthy Chef genereert automatisch een boodschappenlijst op basis van je maaltijdplanning. Je kunt deze lijst aanpassen en afdrukken of delen via je smartphone.',
    },
  ],
  [
    {
      question: 'Kan ik mijn maaltijdplanning delen met vrienden?',
      answer:
        'Ja, je kunt je maaltijdplanning delen met vrienden via e-mail of sociale media. Dit is handig als je samenwerkt aan een maaltijdplanning of recepten wilt delen.',
    },
    {
      question: 'Wat als ik een speciaal dieet volg?',
      answer:
        'Healthy Chef ondersteunt verschillende diëten en voedingsvoorkeuren. Je kunt je dieetinstellingen aanpassen zodat je maaltijdplanning aansluit bij jouw specifieke behoeften.',
    },
    {
      question: 'Hoe krijg ik ondersteuning bij het gebruik van de app?',
      answer:
        'Als je ondersteuning nodig hebt, kun je contact opnemen met ons supportteam via e-mail. We staan klaar om je te helpen met eventuele vragen of problemen die je tegenkomt.',
    },
  ],
];

@Component({
  selector: 'app-faqs',
  standalone: true,
  template: `<section
    id="faq"
    aria-labelledby="faq-title"
    class="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
  >
    <img
      class="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
      src="images/background-faqs.jpg"
      alt=""
      [width]="1558"
      [height]="946"
    />
    <app-container classes="relative">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="faq-title"
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Veelgestelde vragen
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Als je niet kunt vinden wat je zoekt, stuur dan een e-mail naar ons
          supportteam en als je geluk hebt, krijgt je snel antwoord.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        @for(column of faqs; track $index) {
        <li>
          <ul role="list" class="flex flex-col gap-y-8">
            @for(faq of column; track $index) {
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                {{ faq.question }}
              </h3>
              <p class="mt-4 text-sm text-slate-700">{{ faq.answer }}</p>
            </li>
            }
          </ul>
        </li>
        }
      </ul>
    </app-container>
  </section>`,
  imports: [ContainerComponent],
})
export class FaqsComponent {
  faqs = faqs;
}
