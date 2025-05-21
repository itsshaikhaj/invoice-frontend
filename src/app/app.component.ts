import { Component } from '@angular/core';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-generation-portal-frontend';

  constructor(
    private authService: AuthService
  ) {
    console.log('App component initialized');
    this.loadUserProfile();
  }

  // Fetch the user's profile data and populate the form
  loadUserProfile() {
    // this.myAccountService.getProfile().subscribe(
    //   (user) => {
    //     this.authService.saveUser(user);

    //   },
    //   (error) => {
    //     console.error('Error fetching profile:', error);
    //   }
    // );
  }
}
