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
      name: 'Elegant Statement',
      previewUrl: 'assets/templates/template1/index.html',
      id: 'template1'
    },
    {
      name: 'Classic Touch',
      previewUrl: 'assets/templates/template2/index.html',
      id: 'template2'
    },
    {
      name: 'Modern Edge',
      previewUrl: 'assets/templates/template3/index.html',
      id: 'template3'
    },
    {
      name: 'Clean Lines',
      previewUrl: 'assets/templates/template4/index.html',
      id: 'template4'
    },
    {
      name: 'Structured Layout',
      previewUrl: 'assets/templates/template5/index.html',
      id: 'template5'
    },
    {
      name: 'Sharp Detail',
      previewUrl: 'assets/templates/template6/index.html',
      id: 'template6'
    },
    {
      name: 'Contemporary Flow',
      previewUrl: 'assets/templates/template7/index.html',
      id: 'template7'
    },
    {
      name: 'Professional Format',
      previewUrl: 'assets/templates/template8/index.html',
      id: 'template8'
    },
    {
      name: 'Refined Look',
      previewUrl: 'assets/templates/template9/index.html',
      id: 'template9'
    }
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
