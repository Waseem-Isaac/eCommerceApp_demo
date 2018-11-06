import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: extract('Login') } },
  { path: 'register', component: RegisterComponent, data: { title: extract('Register') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }
