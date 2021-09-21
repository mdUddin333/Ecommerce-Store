import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(user: any){
    this.userService.createUsers(user).subscribe(x => console.log(x));
    window.alert("You have successfully registered for an account")
    this.router.navigate(['/home']);
  }
  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
