import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { CvService } from '../cv/cv-service';

@Component({
  selector: 'app-angular',
  imports: [Footer],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  constructor(private cv: CvService){}

  setSelectedCvToAngularEs() {
    this.cv.setSelectedCvToAngularEs();
  }

  setSelectedCvToAngularEn() {
    this.cv.setSelectedCvToAngularEn();
  }
}
