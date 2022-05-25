import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersLisitingComponent } from './users-lisiting/users-lisiting.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersLisitingComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
