import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Footer } from "../../footer/footer";
import { Certificaciones } from '../../sections/certificaciones/certificaciones';

@Component({
  selector: 'app-redes-sistemas',
  imports: [Footer, RouterLink, RouterLinkActive, Certificaciones],
  templateUrl: './redes-sistemas.html',
  styleUrl: './redes-sistemas.scss',
})
export class RedesSistemas {}
