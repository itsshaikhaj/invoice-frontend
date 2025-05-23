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
import { InvoiceTemplate4Component } from './components/invoice-template4/invoice-template4.component';
import { InvoiceTemplate5Component } from './components/invoice-template5/invoice-template5.component';
import { InvoiceTemplate6Component } from './components/invoice-template6/invoice-template6.component';
import { InvoiceTemplate7Component } from './components/invoice-template7/invoice-template7.component';
import { InvoiceTemplate8Component } from './components/invoice-template8/invoice-template8.component';
import { InvoiceTemplate9Component } from './components/invoice-template9/invoice-template9.component';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceTemplate1Component,
    InvoiceTemplate2Component,
    InvoiceTemplate3Component,
    InvoicePreviewComponent,
    InvoiceTemplate4Component,
    InvoiceTemplate5Component,
    InvoiceTemplate6Component,
    InvoiceTemplate7Component,
    InvoiceTemplate8Component,
    InvoiceTemplate9Component
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
