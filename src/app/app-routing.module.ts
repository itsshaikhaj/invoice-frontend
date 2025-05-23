import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'my-account',
    loadChildren: () => import('./features/my-account/my-account.module').then((m) => m.MyAccountModule),
  },
  { path: 'invoice', loadChildren: () => import('./features/invoice/invoice.module').then(m => m.InvoiceModule) }

  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
