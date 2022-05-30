import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersLisitingComponent } from './users-lisiting/users-lisiting.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersLisitingComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
