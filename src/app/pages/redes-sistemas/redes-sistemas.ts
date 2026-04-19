import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Routing } from '../../navbar/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-sistemas',
  imports: [Footer],
  templateUrl: './redes-sistemas.html',
  styleUrl: './redes-sistemas.scss',
})
export class RedesSistemas {
  constructor(private routing: Routing, private router: Router){}
  
  setSelectedCvToRedesEs(){
    this.router.navigate(['cv_english.pdf']);
  }

  setSelectedCvToRedesEn(){
    this.router.navigate(['cv_english.pdf']);
  }

  setSelectedPageToAngular() {
    this.routing.setSelectedPageToAngular();
    this.router.navigate(['angular']);
  }
}
