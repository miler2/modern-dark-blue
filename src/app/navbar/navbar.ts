import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CvService } from '../pages/cv/cv-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
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
