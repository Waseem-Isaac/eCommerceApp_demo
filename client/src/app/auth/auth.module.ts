import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
  ]
})
export class AuthModule { }
