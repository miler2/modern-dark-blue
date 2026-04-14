import { Injectable } from '@angular/core';
import { CvService } from '../pages/cv/cv-service';

@Injectable({
  providedIn: 'root',
})
export class Routing {
  selectedPage: 'landPage' | 'angular' | 'redes' = 'landPage';

  constructor(private cv: CvService) {}

  setSelectedPageToLandPage() {
    this.selectedPage = 'landPage';
  }

  setSelectedPageToAngular() {
    this.selectedPage = 'angular';
  }

  setSelectedPageToRedes() {
    this.selectedPage = 'redes';
  }


  // CV DROPDOWN SELECTION
  setSelectedCvToAngularEs() {
    this.cv.setSelectedCvToAngularEs();
  }

  setSelectedCvToRedesEs() {
    this.cv.setSelectedCvToRedesEs();
  }

  setSelectedCvToAngularEn() {
    this.cv.setSelectedCvToAngularEn();
  }

  setSelectedCvToRedesEn() {
    this.cv.setSelectedCvToRedesEn();
  }
}
