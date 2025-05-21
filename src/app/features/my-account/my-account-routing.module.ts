import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile', // Redirect before other routes
    pathMatch: 'full'
  },
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: 'profile',
        component: AccountDetailsComponent
      },
      {
        path: 'invoices',
        component: InvoiceListComponent
      },

    ]
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
