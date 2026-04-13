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
    this.hamburgerClose();
  }

  setSelectedPageToAngular() {
    this.selectedPage = 'angular';
    this.hamburgerClose();
  }

  setSelectedPageToRedes() {
    this.selectedPage = 'redes';
    this.hamburgerClose();
  }


  // HAMBURGER
  hamburgerActiveToggle() {
    document.getElementById('nav-links')?.classList.toggle('open');
  }

  hamburgerClose() { 
    document.getElementById('nav-links')?.classList.remove('open');
  }


  // CV DROPDOWN SELECTION
  setSelectedCvToAngularEs() {
    this.cv.setSelectedCvToAngularEs();
    this.hamburgerClose();
  }

  setSelectedCvToRedesEs() {
    this.cv.setSelectedCvToRedesEs();
    this.hamburgerClose();
  }

  setSelectedCvToAngularEn() {
    this.cv.setSelectedCvToAngularEn();
    this.hamburgerClose();
  }

  setSelectedCvToRedesEn() {
    this.cv.setSelectedCvToRedesEn();
    this.hamburgerClose();
  }
}
