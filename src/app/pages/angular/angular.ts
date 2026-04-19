import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  imports: [Footer],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  constructor(private router: Router){}

  goToCvAngularEs(){
    this.router.navigate(['cv_angular_espanol.pdf']);
  }

  goToCvAngularEn(){
    this.router.navigate(['cv_angular_english.pdf']);
  }
}
