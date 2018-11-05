import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DashboardService {
    headers = new HttpHeaders({'X-Parse-Application-Id' : 'APPLICATION_ID'});

    constructor(private httpClient: HttpClient) { }



    addProduct(product: any){
        return this.httpClient.post("/classes/products" ,product, {headers : this.headers});
    }

    editProduct(edittedProduct: any, productId: any){
        return this.httpClient.put("/classes/products/"+productId ,edittedProduct, {headers : this.headers});
    }

    removeProduct(productId :any){
        return this.httpClient.delete("/classes/products/"+productId , {headers : this.headers});
    }
    
}