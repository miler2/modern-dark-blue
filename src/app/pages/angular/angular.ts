import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Footer } from "../../footer/footer";
import { Certificaciones } from '../../sections/certificaciones/certificaciones';

@Component({
  selector: 'app-angular',
  imports: [Footer, Certificaciones, RouterLink],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {}
