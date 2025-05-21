import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoicePreviewComponent } from './components/invoice-preview/invoice-preview.component';

const routes: Routes = [
  { path: 'form', component: InvoiceComponent },
  {
    path: 'preview',
    component: InvoicePreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
