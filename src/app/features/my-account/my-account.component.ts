import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  isAdmin: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin; // Set isAdmin flag based on the user role
    });
  }
}
