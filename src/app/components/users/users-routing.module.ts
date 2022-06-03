import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersLisitingComponent } from './users-lisiting/users-lisiting.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '', 
    component: UsersComponent,
    children:[
      {
        path: '',
        component: UsersLisitingComponent
      },
      {
        path: 'users-listing',
        component: UsersLisitingComponent
      },
      {
        path: 'add-edit-user',
        component: AddEditUserComponent
      },
      {
        path: 'view-user',
        component: ViewUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
