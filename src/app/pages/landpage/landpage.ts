import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { RouterLink } from "@angular/router";
import { Routing } from '../../navbar/routing';

@Component({
  selector: 'app-landpage',
  imports: [Footer, RouterLink],
  templateUrl: './landpage.html',
  styleUrl: './landpage.scss',
})
export class Landpage {
  constructor(private routing: Routing){}

  activeNavbarAngular(){
    this.routing.setSelectedPageToAngular();
  }

  activeNavbarRedes(){
    this.routing.setSelectedPageToRedes();
  }
}
