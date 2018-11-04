import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
   DashboardComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }
