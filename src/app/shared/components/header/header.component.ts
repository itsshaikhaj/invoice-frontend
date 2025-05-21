import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn!: boolean;
  user: any;
  userSubscription!: Subscription

  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    // Subscribe to login status observable
    this.authService.getIsLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });

    // Subscribe to user data observable
    this.authService.getUserData().subscribe(userData => {
      this.user = userData;
    });

    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin; // Set isAdmin flag based on the user role
    });
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth/signin']);
  }

  // got to cart
  goToCart(): void {
    this.router.navigate(['cart']);
  }
}
