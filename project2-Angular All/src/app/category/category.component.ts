import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailService } from '../services/product-detail.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: any;

  constructor(private productService: ProductDetailService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
