import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Optional: To show success/error messages
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  profileForm!: FormGroup;
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Initialize the form with validation
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // 10 digit mobile number
      email: ['', [Validators.required, Validators.email]],
    });

    // Fetch and load user profile data
    this.loadUserProfile();
  }

  // Fetch the user's profile data and populate the form
  loadUserProfile() {
    // this.myAccountService.getProfile().subscribe(
    //   (user) => {
    //     this.authService.saveUser(user);
    //     this.profileForm.patchValue({
    //       firstName: user?.user?.firstName,
    //       lastName: user?.user?.lastName,
    //       phoneNumber: user?.user?.phoneNumber,
    //       email: user?.user?.email,
    //     });
    //     this.isLoading = false;
    //   },
    //   (error) => {
    //     console.error('Error fetching profile:', error);
    //     this.toastr.error('Error loading profile.');
    //     this.isLoading = false;
    //   }
    // );
  }

  // Update user profile
  updateProfile() {
    // if (this.profileForm.invalid) {
    //   return;
    // }

    // const updatedProfile = this.profileForm.value;

    // this.myAccountService.updateProfile(updatedProfile).subscribe(
    //   (response) => {
    //     this.loadUserProfile();
    //     this.toastr.success('Profile updated successfully!');
    //   },
    //   (error) => {
    //     console.error('Error updating profile:', error);
    //     this.toastr.error(error?.error?.message || 'Error updating profile.');
    //   }
    // );
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.profileForm.controls;
  }
}
