import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  invoiceTemplates = [
    {
      name: 'Modern Template',
      previewUrl: 'assets/templates/template1/index.html',
      id: 'template1'
    },
    {
      name: 'Classic Template',
      previewUrl: 'assets/templates/template2/index.html',
      id: 'template2'
    },
    {
      name: 'Modern Template',
      previewUrl: 'assets/templates/template3/index.html',
      id: 'template3'
    },
    // {
    //   name: 'Professional Template',
    //   previewUrl: 'assets/templates/template3/index.html',
    //   id: 'template3'
    // }
  ];

  selectTemplate(template: any) {
    this.router.navigate(['/invoice/form'], { queryParams: { template: template.id } });
    localStorage.setItem('selectedTemplate', template.id);
  }


  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }


}
