import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;  // Define the form group
  isSubmitted = false;    // Track if the form was submitted

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the form with validation rules
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepMeSignedIn: [false]  // Checkbox for 'Keep me signed in'
    });
  }

  // Handle form submission
  onLogin(): void {
    this.isSubmitted = true;

    // Check if form is valid
    if (this.loginForm.invalid) {
      return; // Stop submission if the form is invalid
    }

    // Extract form values
    const { email, password, keepMeSignedIn } = this.loginForm.value;

    // Call AuthService to login
    this.authService.login(email, password).subscribe((res: any) => {
      this.authService.saveToken(res.token);  // Save token in AuthService
      this.authService.saveUser(res?.user);  // Save user details in AuthService

      this.router.navigate(['/']);  // Redirect to dashboard
    });
  }
}
