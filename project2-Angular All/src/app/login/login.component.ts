import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';
  users: any;
  showNavBarItem : any;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService
  ) {
    
   }

  ngOnInit(): void {
  }

  onFormSubmit(data: IUser){
    this.userService.login(data).subscribe(data =>{

      this.users = data;
      console.log(this.users)
      localStorage.setItem('user', JSON.stringify(this.users))

      if(this.users != null){

        console.log("valid login");
        this.message = "Login Successful"
        window.alert("Login Successful")
        this.router.navigate(['/home']);

      } else{

        console.log("invalid login")
        this.message = "Username or Password Not Found"
      }

    })

  }



}
