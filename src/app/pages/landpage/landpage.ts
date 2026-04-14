import { Component } from '@angular/core';
import { Routing } from '../../navbar/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landpage',
  imports: [],
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
}
