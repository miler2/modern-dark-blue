import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landpage',
  imports: [Footer, RouterLink],
  templateUrl: './landpage.html',
  styleUrl: './landpage.scss',
})
export class Landpage {}
