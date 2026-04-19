import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Routing {
  selectedPage?: string;

  get currentUrl(){
    this.selectedPage = window.location.pathname;
    if (this.selectedPage === '/angular') {
      this.setSelectedPageToAngular();
    } else if (this.selectedPage === '/redes') {
      this.setSelectedPageToRedes();
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
}
