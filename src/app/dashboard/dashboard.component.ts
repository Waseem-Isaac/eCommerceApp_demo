import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { ProductsService } from '@app/shared/services/products.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@app/shared/services/authentication/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { producFormComponent } from './add-product/product-form.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , OnDestroy{

  isLoading: boolean;
  selectedCategory: any ;
  error: boolean= false;

  products: any[];
  categories: any= [];
  subscription: Subscription;

  constructor(private productsService: ProductsService,public cartService :CartService, 
    private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.isLoading = true;
  
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


  showProduct(product: any){
    const modalRef = this.modalService.open(ShowProductComponent);
    modalRef.componentInstance.product = product;
  }

  addProduct(){
    const modalRef = this.modalService.open(producFormComponent);
  }

  editProduct(product: any){
    const modalRef = this.modalService.open(producFormComponent);
    modalRef.componentInstance.product = product;
  }

  removeProduct(product : any){
    const modalRef = this.modalService.open(RemoveProductComponent);
    modalRef.componentInstance.product = product;
  }
}
