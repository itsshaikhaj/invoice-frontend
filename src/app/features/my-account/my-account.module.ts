import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    AccountDetailsComponent,
    InvoiceListComponent,
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyAccountModule { }
