import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  hamburgerActiveToggle() {
    document.getElementById('nav-links')?.classList.toggle('open');
  }

  hamburgerClose() { 
    document.getElementById('nav-links')?.classList.remove('open');
  }
}
