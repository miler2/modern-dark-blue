import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { CvService } from '../cv/cv-service';
import { Routing } from '../../navbar/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-sistemas',
  imports: [Footer],
  templateUrl: './redes-sistemas.html',
  styleUrl: './redes-sistemas.scss',
})
export class RedesSistemas {
  constructor(private cv: CvService, private routing: Routing, private router: Router){}
  
  setSelectedCvToRedesEs(){
    this.cv.setSelectedCvToRedesEs();
  }

  setSelectedCvToRedesEn(){
    this.cv.setSelectedCvToRedesEn();
  }

  setSelectedPageToAngular() {
    this.routing.setSelectedPageToAngular();
    this.router.navigate(['angular']);
  }
}
