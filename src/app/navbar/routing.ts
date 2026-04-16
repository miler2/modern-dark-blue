import { Injectable } from '@angular/core';
import { CvService } from '../pages/cv/cv-service';

@Injectable({
  providedIn: 'root',
})
export class Routing {
  selectedPage?: string;

  constructor(private cv: CvService) {}

  get currentUrl(){
    this.selectedPage = window.location.pathname;
    if (this.selectedPage === '/angular') {
      this.setSelectedPageToAngular();
    } else if (this.selectedPage === '/redes') {
      this.setSelectedPageToRedes();
    } else if (this.selectedPage === '/cv') {
      this.setSelectedPageToCv();
    } else {
      this.setSelectedPageToLandPage();
    }
    return this.selectedPage;
  }

  setSelectedPageToLandPage() {
    this.selectedPage = 'landPage';
  }

  setSelectedPageToAngular() {
    this.selectedPage = 'angular';
  }

  setSelectedPageToRedes() {
    this.selectedPage = 'redes';
  }

  setSelectedPageToCv() {
    this.selectedPage = 'cv';
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
