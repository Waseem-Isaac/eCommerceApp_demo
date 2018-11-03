import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { ProductsService } from '@app/shared/services/products.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{

  isLoading: boolean;
  selectedCategory: any ;
  error: boolean= false;

  products: any[];
  categories: any= [];
  subscription: Subscription;

  constructor(private productsService: ProductsService,private cartService :CartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
   
    this.getCategories();
    this.filterProducts()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  filterProducts(category? :string){
    this.isLoading = true;

    this.selectedCategory = category;
    
    this.subscription = this.productsService.filterProducts(category)
    .subscribe((res: any) => {
      this.isLoading = false;

      this.products = res.results;

      
    }, (err: any) =>{
      console.log(err)
      if(err.message == "Http failure response for (unknown url): 0 Unknown Error"){
        this.error = true;
      }
    })
  }

  getCategories(){
    this.subscription = this.productsService.filterProducts()
    .pipe(
      map((res: any) => {
        res.results.forEach((product: any) => {
          this.categories.push(product.category);
          this.categories = _.uniq(this.categories)
        });
        return res
      }),
      )
      .subscribe()
  }

  addToCart(product: any){
    console.log("Should toaster run")
    this.toastr.success('Item '+ product.title + ' added to cart');

    this.cartService.addToCart(product)

  }


}
