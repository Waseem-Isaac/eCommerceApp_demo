import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductsService {
     headers = new HttpHeaders({'X-Parse-Application-Id' : 'APPLICATION_ID'});

    
    constructor(private httpClient: HttpClient) {
       
     }


    filterProducts(category?: string){
        console.log("filter : ", category)
        if(!category){
            return this.httpClient.get("/classes/products" , {headers : this.headers});
        }
       else{
        return this.httpClient.get('/classes/products?where={"category" : "'+category+'"}' , {headers : this.headers});
       }
    }


    
}