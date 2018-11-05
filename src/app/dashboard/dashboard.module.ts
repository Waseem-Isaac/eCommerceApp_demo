import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowProductComponent } from './show-product/show-product.component';
import { producFormComponent } from './add-product/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    DashboardRoutingModule
  ],
  declarations: [
   DashboardComponent,
   producFormComponent,
   RemoveProductComponent,
   ShowProductComponent
  ],
  entryComponents: [
    producFormComponent,
    RemoveProductComponent,
    ShowProductComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }
