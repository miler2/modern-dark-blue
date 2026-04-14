import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Routing } from './routing';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private routing: Routing) {}

  setSelectedPageToLandPage() {
    this.routing.setSelectedPageToLandPage();
    this.hamburgerClose();
  }

  setSelectedPageToAngular() {
    this.routing.setSelectedPageToAngular();
    this.hamburgerClose();
  }

  setSelectedPageToRedes() {
    this.routing.setSelectedPageToRedes();
    this.hamburgerClose();
  }

  get selectedPage(){
    return this.routing.selectedPage;
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
    this.routing.setSelectedCvToAngularEs();
    this.hamburgerClose();
  }

  setSelectedCvToRedesEs() {
    this.routing.setSelectedCvToRedesEs();
    this.hamburgerClose();
  }

  setSelectedCvToAngularEn() {
    this.routing.setSelectedCvToAngularEn();
    this.hamburgerClose();
  }

  setSelectedCvToRedesEn() {
    this.routing.setSelectedCvToRedesEn();
    this.hamburgerClose();
  }
}
