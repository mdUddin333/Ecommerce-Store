import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASEURL = 'http://localhost:8080/';
  private ENDPOINTS = {
    REGISTER: 'register',
    LOGIN: 'login'
  }

  private userObservable = Observable
  private userAccount: any;


  constructor(private http: HttpClient) {
   }

  public getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(
      `${this.BASEURL + this.ENDPOINTS.REGISTER}`
      );
  }

  public getUsersById(id: any): Observable<IUser>{
    return this.http.get<IUser>(
      `${this.BASEURL + this.ENDPOINTS.REGISTER}/@{id}`
    )
  }

  public createUsers(user: any){
    return this.http.post<any>(
      `${this.BASEURL + this.ENDPOINTS.REGISTER}`,
      user
    );
  }

  public login(user: IUser): Observable<IUser>{
    this.userAccount = this.http.get<IUser>(
      `${this.BASEURL + this.ENDPOINTS.LOGIN + "/" + user.username 
        + "/" + user.password}`
    );

    return this.userAccount;
    
  }

  public getUserAccount(){
    return this.userAccount;
  }

  public getFirstNameAndLastName(){
    return this.userAccount;
  }

  public logout(){
  }

  public loggedIn(): boolean{
    if(localStorage.getItem('token')){
        return true;
    } else{
        return false;
    }
}

deleteUser(id: any): Observable<IUser> {
  return this.http.delete<IUser>(
    `${this.BASEURL + this.ENDPOINTS.REGISTER}/${id}`
  );
}
}
