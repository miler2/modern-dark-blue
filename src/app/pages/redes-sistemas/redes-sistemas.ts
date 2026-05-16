import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-redes-sistemas',
  imports: [Footer, RouterLink, RouterLinkActive],
  templateUrl: './redes-sistemas.html',
  styleUrl: './redes-sistemas.scss',
})
export class RedesSistemas {}
