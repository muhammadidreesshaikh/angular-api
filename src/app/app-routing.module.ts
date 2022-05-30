import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
