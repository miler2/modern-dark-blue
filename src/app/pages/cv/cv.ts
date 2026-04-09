import { Component } from '@angular/core';
import { CvService } from './cv-service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  constructor(private cv: CvService) {}

  get selectedCv() {
    return this.cv.selectedCvValue;
  }
}
