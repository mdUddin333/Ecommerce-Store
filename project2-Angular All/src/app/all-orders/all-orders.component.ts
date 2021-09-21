import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  public orders: any;

  constructor(private orderService: OrderService) {
    this.orderService.getOrder().subscribe(data => {
      this.orders = data;
    })
   }

  ngOnInit(): void {
  }

}
