import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersLisitingComponent } from './users-lisiting/users-lisiting.component';

const routes: Routes = [
  {
    path: '', 
    component: UsersComponent,
    children:[
      {
        path: '',
        component: UsersLisitingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
