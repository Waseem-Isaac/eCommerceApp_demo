import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DashboardService {
    constructor(private httpClient: HttpClient) { }



    addProduct(product: any){
        console.log(product)
    }

    editProduct(product: any){
        console.log(product);

    }

    removeProduct(product :any){
        console.log(product)
    }
    
}