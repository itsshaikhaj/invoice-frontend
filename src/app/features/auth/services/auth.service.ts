import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5000/api/auth';  // Replace with your backend URL
  // BehaviorSubject to store user data and authentication state
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {

    const savedUser = localStorage.getItem('user');
    const initialUser = savedUser ? JSON.parse(savedUser) : null;

    // Initialize the BehaviorSubject with the stored user data or null if no user is found
    this.currentUserSubject = new BehaviorSubject<any>(initialUser);
    this.isLoggedInSubject = new BehaviorSubject<boolean>(!!initialUser);

  }

  // Login user and store token
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((response: any) => {
          if (response.token) {
            this.saveToken(response.token);
          }
          return response;
        })
      );
  }

  signup(payload: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }


  // Observable for user data
  getUserData(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  // Observable for login status
  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Function to save access token and user data
  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  // Function to get access token
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  // Function to save user data and update the observable
  saveUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user); // Update the BehaviorSubject with the new user data
    this.isLoggedInSubject.next(true);  // Set logged in status to true
  }

  // Function to get user data (current value of BehaviorSubject)
  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  // Function to check if the user is logged in (current value of isLoggedInSubject)
  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  // Function to log out the user and clear data
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);  // Set user data to null
    this.isLoggedInSubject.next(false);  // Set logged in status to false
  }

  // Observable to check if the user is an admin
  isAdmin(): Observable<boolean> {
    return new Observable(observer => {
      const user = this.getCurrentUser(); // Fetch user details
      const isAdmin = user && user?.user?.roles && user.user?.roles.includes('ADMIN');
      observer.next(isAdmin); // Emit true if the user has the admin role
      observer.complete();    // Complete the observable
    });
  }

}
