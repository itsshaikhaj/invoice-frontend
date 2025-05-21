import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  // CanActivate now returns an Observable<boolean> to track the login status
  canActivate(): Observable<boolean> {
    return this.authService.getIsLoggedIn().pipe(
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['auth/signin']);  // Redirect to login page if not authenticated
          return false;
        }
      })
    );
  }
}
