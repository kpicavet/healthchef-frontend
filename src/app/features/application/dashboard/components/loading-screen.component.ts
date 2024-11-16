import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        <div class="mb-4">
          <div
            class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mx-auto"
          ></div>
        </div>
        <h2 class="text-2xl font-bold mb-4">Maaltijdplan wordt gegenereerd</h2>
        <p class="text-lg mb-4">{{ currentBuzzword }}</p>
      </div>
    </div>
  `,
})
export class LoadingScreenComponent implements OnInit {
  buzzwords: string[] = [
    'Gezonde keuzes maken...',
    'Recepten samenstellen...',
    'Voedingswaarden berekenen...',
    'Boodschappenlijst voorbereiden...',
    'Variatie toevoegen...',
    'Seizoensgebonden ingrediënten selecteren...',
    'Maaltijden balanceren...',
    'Portiegrootten optimaliseren...',
    'Culinaire inspiratie verzamelen...',
    'Voedingsrichtlijnen toepassen...',
  ];
  currentBuzzword: string = '';

  ngOnInit() {
    this.rotateBuzzwords();
  }

  rotateBuzzwords() {
    let index = 0;
    setInterval(() => {
      this.currentBuzzword = this.buzzwords[index];
      index = (index + 1) % this.buzzwords.length;
    }, 3000);
  }
}
