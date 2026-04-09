import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  selectedCv = signal<'angular_es' | 'redes_es' | 'angular_en' | 'redes_en'>('angular_es');

  setSelectedCvToAngularEs() {
    this.selectedCv.set('angular_es');
  }

  setSelectedCvToRedesEs() {
    this.selectedCv.set('redes_es');
  }

  setSelectedCvToAngularEn() {
    this.selectedCv.set('angular_en');
  }

  setSelectedCvToRedesEn() {
    this.selectedCv.set('redes_en');
  }

  get selectedCvValue() {
    return this.selectedCv();
  }
}
