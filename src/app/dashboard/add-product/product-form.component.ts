import { DashboardService } from './../../shared/services/dashboard.service';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class producFormComponent implements OnInit {
  @Input() product: any;
  productForm: FormGroup;
  categories: Observable<any>;

  constructor(public activeModal: NgbActiveModal,
     private formBuilder : FormBuilder , private dashboardService:DashboardService,
     private toastr: ToastrService, private productsService:ProductsService) { 
   
  }

  ngOnInit() {
    this.getCategories();
    this.createForm();
  }


  submitProduct(){
    let addedProduct = {
      title: this.productForm.value.title ,
      category: this.productForm.value.category , 
      price : this.productForm.value.price,
      stars : 0
    }
    if(this.product){
      this.dashboardService.editProduct(addedProduct, this.product.objectId).subscribe((res: any) => {
        console.log(res)
        this.activeModal.close(addedProduct)
      }, err => console.log(err))
    }else{
      this.dashboardService.addProduct(addedProduct).subscribe((res: any) => {
        console.log(res)
        let newProduct = {objectId : res.objectId, title: this.productForm.value.title , category: this.productForm.value.category , price : this.productForm.value.price, stars : 0}
        this.activeModal.close(newProduct)
      }, err => console.log(err))
    }
   
  }

  getCategories(){
    this.categories = this.productsService.getCategories()
  }
  
  private createForm() {
    this.productForm = this.formBuilder.group({
      title: [this.product?this.product.title : '', Validators.required],
      category: [this.product?this.product.category : null, Validators.required],
      price: [this.product?this.product.price : null,Validators.compose([Validators.required])],
    });
  }
}
