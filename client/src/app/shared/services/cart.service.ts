import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: "root"})
export class CartService {

    cart: Array<any> = JSON.parse(localStorage.getItem('cart')) || [];
    cartUpdated$: EventEmitter<any>;
    constructor() { 
        this.cartUpdated$ = new EventEmitter()
    }

    //Client side cart

    //Add item to cart
    addToCart(addedItem: any){
        if(this.cart.length > 0 ){
            if(this.checkExist(addedItem)){
                console.log('Existed');
                this.cart.forEach(item => {
                    if(item.id == addedItem.objectId){
                       item.qty += 1
                    }
                });
            }else{
                console.log('not exsisted')
                this.cart.push({id : addedItem.objectId , item: addedItem , qty: 1})
            }  
        }else{
            this.cart.push({id : addedItem.objectId , item: addedItem , qty: 1})
        }
   
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    //Remove item from cart
    removeFromCart(item: any){
        this.cart=  this.cart.filter(cartItem => item.id !== cartItem.id)
        localStorage.setItem('cart', JSON.stringify(this.cart))
        
        this.cartUpdated$.emit('cart-updated')
    }

    //increase - decrease Qty
    increaseQty(item: any){
        this.cart.forEach(cartItem => {
            if(cartItem.id == item.id) ++cartItem.qty
        });
        localStorage.setItem('cart', JSON.stringify(this.cart))

        this.cartUpdated$.emit('cart-updated')
    }
    decreaseQty(item: any){
        this.cart.forEach(cartItem => {
            if(cartItem.id == item.id) --cartItem.qty
        });
        localStorage.setItem('cart', JSON.stringify(this.cart))

        this.cartUpdated$.emit('cart-updated')
    }

    calculateitemsTotal(): number{
        let sum: number = 0;
        this.cart.forEach(cartItem => {
            sum += (cartItem.item.price * cartItem.qty)
        });
        
        this.cartUpdated$.emit('cart-updated')
        return Number(sum.toFixed(2))
    }

    clearCart(){
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart))
     
        this.cartUpdated$.emit('cart-updated')
    }

    
    //helper functions
    checkExist(item: any){
        for (let i = 0; i < this.cart.length; i++) {
            const element = this.cart[i];
            if(item.objectId == element.id) {
                return true;
            }
        }
        return false
    }

    
   
}