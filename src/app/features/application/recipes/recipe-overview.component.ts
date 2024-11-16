import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  calories: number;
  prepTime: number;
  category: string;
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Uitdagend';
}

@Component({
  selector: 'app-recipe-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 class="text-5xl font-bold mb-12 text-center text-gray-800">
        Ontdek Heerlijke Recepten
      </h1>

      <!-- Jouw Gegenereerde Recepten -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-8 text-center text-gray-700">
          Jouw Gegenereerde Recepten
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let recipe of generatedRecipes"
            class="recipe-card transform hover:scale-105 transition-transform duration-300"
          >
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden h-full relative"
            >
              <div
                class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-black opacity-50"
              ></div>
              <img
                [src]="recipe.image"
                [alt]="recipe.name"
                class="w-full h-64 object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-800"
              >
                {{ recipe.category }}
              </div>
              <div class="p-6 relative">
                <h3 class="text-2xl font-bold mb-2 text-gray-800">
                  {{ recipe.name }}
                </h3>
                <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
                <div class="flex justify-between items-center mb-4">
                  <span class="text-sm font-medium text-blue-600"
                    >{{ recipe.calories }} kcal</span
                  >
                  <span class="text-sm font-medium text-purple-600"
                    >{{ recipe.prepTime }} min</span
                  >
                </div>
                <div class="flex items-center justify-between">
                  <span
                    class="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-semibold"
                  >
                    {{ recipe.difficulty }}
                  </span>
                  <a
                    [routerLink]="['/recipe', recipe.id]"
                    class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                  >
                    Bekijk Recept →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Beschikbare Recepten -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-8 text-center text-gray-700">
          Beschikbare Recepten
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            *ngFor="let recipe of availableRecipes"
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div class="relative">
                <img
                  [src]="recipe.image"
                  [alt]="recipe.name"
                  class="w-full h-48 object-cover"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"
                >
                  <h3 class="text-lg font-bold text-white">
                    {{ recipe.name }}
                  </h3>
                </div>
              </div>
              <div class="p-4">
                <p class="text-gray-600 text-sm mb-4">
                  {{ recipe.description }}
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium text-blue-600"
                    >{{ recipe.calories }} kcal</span
                  >
                  <a
                    [routerLink]="['/recipe', recipe.id]"
                    class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Meer Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Favoriete Recepten van Andere Gebruikers -->
      <section>
        <h2 class="text-3xl font-semibold mb-8 text-center text-gray-700">
          Favorieten van de Community
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let recipe of favoriteRecipes" class="recipe-card">
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden h-full relative group"
            >
              <img
                [src]="recipe.image"
                [alt]="recipe.name"
                class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <a
                  [routerLink]="['/recipe', recipe.id]"
                  class="text-white text-lg font-bold hover:underline"
                >
                  Ontdek Recept
                </a>
              </div>
              <div
                class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                {{ recipe.category }}
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-800">
                  {{ recipe.name }}
                </h3>
                <p class="text-gray-600 text-sm mb-4">
                  {{ recipe.description }}
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium text-purple-600"
                    >{{ recipe.prepTime }} min</span
                  >
                  <span class="text-sm font-medium text-blue-600"
                    >{{ recipe.calories }} kcal</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .recipe-card {
        @apply transition-all duration-300 ease-in-out;
      }
      .recipe-card:hover {
        @apply transform -translate-y-1;
      }
    `,
  ],
})
export class RecipeOverviewComponent implements OnInit {
  generatedRecipes: Recipe[] = [
    {
      id: 1,
      name: 'Gegrilde Kip Salade',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      description:
        'Een gezonde en heerlijke gegrilde kip salade met gemengde groenten en een lichte vinaigrette.',
      calories: 350,
      prepTime: 20,
      category: 'Lunch',
      difficulty: 'Makkelijk',
    },
    {
      id: 2,
      name: 'Vegetarische Pasta Primavera',
      image:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description:
        'Een kleurrijk pastagerecht vol met verse seizoensgroenten en kruiden.',
      calories: 400,
      prepTime: 25,
      category: 'Diner',
      difficulty: 'Gemiddeld',
    },
    {
      id: 3,
      name: 'Bessen Smoothie Bowl',
      image:
        'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      description:
        'Een verfrissende smoothie bowl met verse bessen, granola en chiazaad.',
      calories: 300,
      prepTime: 10,
      category: 'Ontbijt',
      difficulty: 'Makkelijk',
    },
  ];

  availableRecipes: Recipe[] = [
    {
      id: 4,
      name: "Quinoa Gevulde Paprika's",
      image:
        'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description:
        "Kleurrijke paprika's gevuld met eiwitrijke quinoa en groenten.",
      calories: 320,
      prepTime: 35,
      category: 'Diner',
      difficulty: 'Gemiddeld',
    },
    {
      id: 5,
      name: 'Avocado Toast met Gepocheerd Ei',
      image:
        'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      description:
        'Romige avocado op volkoren toast, met een perfect gepocheerd ei.',
      calories: 280,
      prepTime: 15,
      category: 'Ontbijt',
      difficulty: 'Gemiddeld',
    },
    {
      id: 6,
      name: 'Linzen en Groente Soep',
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      description:
        'Een hartige en voedzame soep vol met linzen en gemengde groenten.',
      calories: 250,
      prepTime: 40,
      category: 'Lunch',
      difficulty: 'Makkelijk',
    },
    {
      id: 7,
      name: 'Griekse Yoghurt Parfait',
      image:
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description:
        'Lagen van romige Griekse yoghurt, vers fruit en knapperige granola.',
      calories: 220,
      prepTime: 10,
      category: 'Ontbijt',
      difficulty: 'Makkelijk',
    },
  ];

  favoriteRecipes: Recipe[] = [
    {
      id: 8,
      name: 'Teriyaki Zalm Bowl',
      image:
        'https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
      description:
        'Gegrilde teriyaki zalm geserveerd op bruine rijst met gestoomde groenten.',
      calories: 450,
      prepTime: 30,
      category: 'Diner',
      difficulty: 'Gemiddeld',
    },
    {
      id: 9,
      name: 'Mediterrane Kikkererwten Salade',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description:
        'Een verfrissende salade met kikkererwten, komkommer, tomaten en feta kaas.',
      calories: 300,
      prepTime: 20,
      category: 'Lunch',
      difficulty: 'Makkelijk',
    },
    {
      id: 10,
      name: 'Banaan Havermout Pannenkoeken',
      image:
        'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      description:
        'Luchtige pannenkoeken gemaakt van gepureerde bananen en havermout, geserveerd met ahornsiroop.',
      calories: 380,
      prepTime: 25,
      category: 'Ontbijt',
      difficulty: 'Gemiddeld',
    },
  ];

  ngOnInit(): void {
    console.log('Recipe data loaded');
  }
}
