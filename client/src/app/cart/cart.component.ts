import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  version: string = environment.version;
  cart:any = [];

  constructor(public cartService : CartService) { }

  ngOnInit() { 
    this.loadcart();

    // load cart when cart updated
    this.cartService.cartUpdated$.subscribe((res: any) => {
      this.loadcart()
    })
  }


  loadcart(){
    this.cart = JSON.parse(localStorage.getItem('cart'))
  }
  checkout(){
    this.cartService.clearCart()
  }
}
