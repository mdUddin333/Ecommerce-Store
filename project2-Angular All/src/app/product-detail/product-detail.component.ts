import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ProductDetailService } from '../services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public products: any;

  constructor(private productDetailService: ProductDetailService,
    private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.productDetailService.getAllProducts().subscribe(data =>{
      this.products = data;
    })
  }

  onClickCart(product: any) {

    this.orderService.addCart(product).subscribe(data=>{
      console.log(data)
    });
    
    this.router.navigate(['/cart'])
  }

}
