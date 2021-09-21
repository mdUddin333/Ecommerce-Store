import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  loggedIn: boolean =  true;
  user: any;
  users: IUser ={
    userId: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    username: '',
    address: '',
    password: '',
    type: ''
  };
  type: string = '';


  ngOnInit(): void {
    this.isLoggedIn()
  }

  logout(){
    localStorage.clear();
  }

  isLoggedIn(){
    if(localStorage.getItem('user')){
      this.loggedIn = true;
      this.user = localStorage.getItem('user');
      this.users = JSON.parse(this.user);
      this.type = this.users.type;
      console.log(this.type)
    } else{
      this.loggedIn = false;
      this.type = '';

    }
  }

}
