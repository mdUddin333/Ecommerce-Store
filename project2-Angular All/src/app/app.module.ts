import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderComponent } from './order/order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListComponent } from './list/list.component';
import { CategoryComponent } from './category/category.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    CartComponent,
    ProductDetailComponent,
    OrderComponent,
    ContactUsComponent,
    AboutUsComponent,
    ListComponent,
    CategoryComponent,
    AllOrdersComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
