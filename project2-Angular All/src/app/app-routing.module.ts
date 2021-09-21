import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
// import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'productDetail', component: ProductDetailComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'list', component: ListComponent},
  {path: 'allOrders', component: AllOrdersComponent},
  {path: 'delete',  component: UserDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
