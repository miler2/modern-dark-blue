import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  selectedCv = signal<'angular_es' | 'redes_es' | 'angular_en' | 'redes_en'>('angular_es');

  constructor(private router: Router){}

  setSelectedCvToAngularEs() {
    this.selectedCv.set('angular_es');
    this.router.navigate(['cv']);
  }

  setSelectedCvToRedesEs() {
    this.selectedCv.set('redes_es');
    this.router.navigate(['cv']);
  }

  setSelectedCvToAngularEn() {
    this.selectedCv.set('angular_en');
    this.router.navigate(['cv']);
  }

  setSelectedCvToRedesEn() {
    this.selectedCv.set('redes_en');
    this.router.navigate(['cv']);
  }

  get selectedCvValue() {
    return this.selectedCv();
  }
}
