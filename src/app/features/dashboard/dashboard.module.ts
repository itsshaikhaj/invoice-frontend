import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class DashboardModule { }
