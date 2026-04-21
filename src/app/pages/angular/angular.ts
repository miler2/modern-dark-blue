import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-angular',
  imports: [Footer, RouterLink],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {}
