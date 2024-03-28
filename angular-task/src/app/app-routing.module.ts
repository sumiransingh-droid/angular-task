import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { RegistrationComponent } from './storage/registration/registration.component';
import { LoginComponent } from './storage/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
