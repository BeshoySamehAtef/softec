import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor( private router: Router,
    private route: ActivatedRoute,){

    }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(){
    this.router.navigate(['/products'])
  }
}
