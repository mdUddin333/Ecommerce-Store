import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private ENDPOINT={

    PRODUCT_DETAILS_URL:"https://fakestoreapi.com/products/"
  }

  constructor(private http: HttpClient) { }

  getProductDetails(productId:any){
    return this.http.get(`${this.ENDPOINT.PRODUCT_DETAILS_URL+'/' + productId}`)
  }
  getAllProducts(): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINT.PRODUCT_DETAILS_URL}`)
  }

  getCategory(): Observable<any>{
    return this.http.get<any>(this.ENDPOINT.PRODUCT_DETAILS_URL)
  }

}
