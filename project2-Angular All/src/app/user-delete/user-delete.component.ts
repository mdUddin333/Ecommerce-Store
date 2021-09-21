import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  id: any;
  user: any;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute,
    private router: Router) {
    this.id = activateRoute.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.userService.getUsersById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  onSubmit(data: any){
    console.log(data);
    this.userService.deleteUser(data).subscribe(a => console.log(a));
    // this.router.navigate(['/list'])
  }



}
