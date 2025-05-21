import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceTemplate1Component } from './components/invoice-template1/invoice-template1.component';
import { InvoiceTemplate2Component } from './components/invoice-template2/invoice-template2.component';
import { InvoiceTemplate3Component } from './components/invoice-template3/invoice-template3.component';
import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceTemplate1Component,
    InvoiceTemplate2Component,
    InvoiceTemplate3Component,
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatDialogModule
  ]
})
export class InvoiceModule { }
