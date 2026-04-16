import { Component } from '@angular/core';
import { Routing } from '../../navbar/routing';
import { Router } from '@angular/router';
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-landpage',
  imports: [Footer],
  templateUrl: './landpage.html',
  styleUrl: './landpage.scss',
})
export class Landpage {
  constructor(private routing: Routing, private router: Router){}

  goToAngularPage(){
    this.routing.setSelectedPageToAngular();
    this.router.navigate(['angular']);
  }

  goToRedesPage(){
    this.routing.setSelectedPageToRedes();
    this.router.navigate(['redes']);
  }

  goToAngularEs(){
    this.routing.setSelectedCvToAngularEs();
    this.router.navigate(['cv']);
  }

  goToAngularEn(){
    this.routing.setSelectedCvToAngularEn();
    this.router.navigate(['cv']);
  }

  goToRedesEs(){
    this.routing.setSelectedCvToRedesEs();
    this.router.navigate(['cv']);
  }

  goToRedesEn(){
    this.routing.setSelectedCvToRedesEn();
    this.router.navigate(['cv']);
  }
}
