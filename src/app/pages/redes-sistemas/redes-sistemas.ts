import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { RouterLink } from '@angular/router';
import { Routing } from '../../navbar/routing';

@Component({
  selector: 'app-redes-sistemas',
  imports: [Footer, RouterLink],
  templateUrl: './redes-sistemas.html',
  styleUrl: './redes-sistemas.scss',
})
export class RedesSistemas {
  constructor(private routing: Routing) {}

  setSelectedPageToAngular() {
    this.routing.setSelectedPageToAngular();
  }
}
