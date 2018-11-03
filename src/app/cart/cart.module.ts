import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ]
})
export class CartModule { }
