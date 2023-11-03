import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor( private router: Router,
    private route: ActivatedRoute,){}

    isMobile = window.innerWidth < 600;
    isMobileMenuOpen = false;
    links = ['home','products', 'orders'];
  
    toggleMenu(): void {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  
  navigate(link:string){
    this.isMobileMenuOpen = false;
    this.router.navigate([`/${link}`])
  }
}
