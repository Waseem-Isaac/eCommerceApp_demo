import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  constructor(public cartService: CartService, private toastr: ToastrService) { }

  ngOnInit() {
  }


  addToCart(product: any){
    console.log("Should toaster run")
    this.toastr.success('Item '+ product.title + ' added to cart');
    this.cartService.addToCart(product)
  }


  //
  getItemFromCart(product: any){
    for (let i = 0; i < this.cartService.cart.length; i++) {
      const element = this.cartService.cart[i];
      if(element.id == product.objectId) {
         return element;
        }
    }
    return 0
  }

  increaseQty(product: any){
    this.cartService.increaseQty(product)
  }
  decreaseQty(product: any){
    console.log(product)
    if (product.qty == 1){
      this.cartService.removeFromCart(product)
    }else{
      this.cartService.decreaseQty(product)

    }
  }
}
