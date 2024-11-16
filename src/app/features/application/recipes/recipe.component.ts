import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

interface Step {
  description: string;
  time: number;
}

interface Recipe {
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[];
}

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img
            [src]="recipe.image"
            [alt]="recipe.name"
            class="w-full h-64 object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <h1 class="text-4xl font-bold text-white">{{ recipe.name }}</h1>
          </div>
        </div>

        <div class="p-6">
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>

          <div class="flex flex-wrap gap-4 mb-6">
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span
                >Bereidingstijd:
                {{ recipe.prepTime + recipe.cookTime }} min</span
              >
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span>Porties: {{ recipe.servings }}</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                ></path>
              </svg>
              <span>Calorieën: {{ recipe.calories }} kcal</span>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-2xl font-semibold mb-4">Ingrediënten</h2>
              <ul class="space-y-2">
                <li
                  *ngFor="let ingredient of recipe.ingredients"
                  class="flex items-center"
                >
                  <svg
                    class="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span
                    >{{ ingredient.amount }} {{ ingredient.unit }}
                    {{ ingredient.name }}</span
                  >
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-semibold mb-4">Bereidingswijze</h2>
              <ol class="space-y-4">
                <li
                  *ngFor="let step of recipe.steps; let i = index"
                  class="flex"
                >
                  <span
                    class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0"
                    >{{ i + 1 }}</span
                  >
                  <div>
                    <p>{{ step.description }}</p>
                    <span class="text-sm text-gray-500"
                      >{{ step.time }} min</span
                    >
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Tips</h2>
            <ul class="space-y-2">
              <li *ngFor="let tip of recipe.tips" class="flex items-start">
                <svg
                  class="w-5 h-5 text-yellow-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
                <span>{{ tip }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RecipeComponent implements OnInit {
  mealType: string | null = null;
  recipe: Recipe = {
    name: 'Romige Pasta met Geroosterde Groenten',
    description:
      'Een heerlijke vegetarische pasta met een romige saus en geroosterde seizoensgroenten. Perfect voor een doordeweekse avond of een casual diner met vrienden.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    calories: 450,
    ingredients: [
      { name: 'penne pasta', amount: '400', unit: 'g' },
      { name: 'courgette', amount: '1', unit: 'stuks' },
      { name: 'paprika', amount: '2', unit: 'stuks' },
      { name: 'cherrytomaatjes', amount: '200', unit: 'g' },
      { name: 'rode ui', amount: '1', unit: 'stuks' },
      { name: 'knoflook', amount: '3', unit: 'tenen' },
      { name: 'roomkaas', amount: '200', unit: 'g' },
      { name: 'parmezaanse kaas', amount: '50', unit: 'g' },
      { name: 'olijfolie', amount: '2', unit: 'el' },
      { name: 'Italiaanse kruiden', amount: '1', unit: 'tl' },
      { name: 'zout en peper', amount: '', unit: 'naar smaak' },
    ],
    steps: [
      {
        description:
          'Verwarm de oven voor op 200°C. Snijd de courgette, paprika en ui in stukken. Meng de groenten met olijfolie, zout, peper en Italiaanse kruiden.',
        time: 5,
      },
      {
        description:
          'Verspreid de groenten over een bakplaat en rooster ze in de oven voor ongeveer 20 minuten, of tot ze gaar en licht goudbruin zijn.',
        time: 20,
      },
      {
        description:
          'Kook ondertussen de pasta volgens de aanwijzingen op de verpakking. Giet af en bewaar een kopje van het kookwater.',
        time: 10,
      },
      {
        description:
          'Verhit wat olijfolie in een grote pan en fruit de fijngehakte knoflook. Voeg de roomkaas toe en roer tot een gladde saus ontstaat. Voeg indien nodig wat pasta-kookwater toe om de saus te verdunnen.',
        time: 5,
      },
      {
        description:
          'Voeg de pasta, geroosterde groenten en cherrytomaatjes toe aan de saus. Meng goed en laat alles nog 2-3 minuten zachtjes pruttelen.',
        time: 3,
      },
      {
        description:
          'Serveer de pasta met geraspte Parmezaanse kaas erover. Garneer eventueel met wat verse basilicumblaadjes.',
        time: 2,
      },
    ],
    tips: [
      'Voor een eiwitrijke variant kun je gegrilde kipstukjes of gebakken tofu toevoegen.',
      'Experimenteer met verschillende soorten kaas voor variatie in smaak.',
      'Bewaar eventuele restjes in een luchtdichte container in de koelkast. De pasta is tot 3 dagen houdbaar.',
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.mealType = this.route.snapshot.paramMap.get('mealType');
  }
}
