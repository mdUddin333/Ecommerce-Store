import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';
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

  constructor(private userService: UserService) {
    this.user = userService.getUsersById(4)
   }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.users = JSON.parse(this.user);
    
  }

}
