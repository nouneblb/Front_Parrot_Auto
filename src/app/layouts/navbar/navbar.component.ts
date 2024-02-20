import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class HeaderComponent {
  isMenuOpen = false;
  menuClass = '';

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuClass = this.isMenuOpen ? 'show' : '';
  }

  closeMenuAndNavigate(route: string) {
    this.isMenuOpen = false;
    this.router.navigate([route]);
  }
}
