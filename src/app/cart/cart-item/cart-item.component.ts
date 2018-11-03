import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@app/shared/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem : any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }


  removeFromCart(){
    this.cartService.removeFromCart(this.cartItem)
  }
  decreaseQty(){
    this.cartService.decreaseQty(this.cartItem)
  }
  increaseQty(){
    this.cartService.increaseQty(this.cartItem)
  }
}
