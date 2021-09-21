import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '../models/cart.model';
import { IOrder } from '../models/order.model';
import { IProduct } from '../models/product.model';
import { OrderService } from '../services/order.service';
import { IUser } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: any;
  public product: ICart ={
    cartId: 0,
    image: '',
    title: '',
    quantity: 1,
    price: 0
  }
  public order: IOrder ={
    orderId: 0,
    userId: 0,
    productName: '',
    quantity: 1,
    price: 0
  }
  user: any;
  users : IUser = {
    userId: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    username: '',
    address: '',
    password: '',
    type: ''
  }

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllCarts().subscribe(data=>{
      this.items=data
    })
    this.user = localStorage.getItem('user');
    this.users = JSON.parse(this.user);
  }

  onClickRemove(item: any){
    
    console.log("Cart component"+item)
    this.orderService.deleteCart(item).subscribe(cart=>{
      this.product = cart;
      console.log("subscribe log: " + this.product);
      location.reload();
    })
  }

  onClickCheckout(){
    console.log(this.items);
    for (let index = 0; index < this.items.length; index++) {
        this.order = {
        orderId: 0,
        userId: this.users.userId,
        productName: this.items[index].title,
        quantity: 1,
        price: this.items[index].price

      }
      console.log("cart price "+this.order.price);
      this.orderService.createOrder(this.order).subscribe(data => {
        console.log("order : " + data);
      })
      
    }
    this.orderService.deleteAllCarts().subscribe(data =>{
      console.log(data);
      console.log("all items deleted");
    });
    this.router.navigate(['/orders'])
  }


}
