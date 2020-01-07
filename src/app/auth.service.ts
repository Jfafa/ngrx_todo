import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from './model/app-state.model'
import { UsersState } from './model/users-state.model'
import { HttpClient } from '@angular/common/http'
import { user } from './model/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;
  constructor(private store: Store<AppState>,
    private usersStore: Store<UsersState>,
    private http: HttpClient) {
    this.store.pipe().subscribe(store => {
      this.currentUser = store.currentUser;
    });
    console.log('check' + this.currentUser)
  }


  isUserLoggedIn(): boolean {
    return this.currentUser.isLogged
  }

  isUserAdmin(): boolean {
    return this.currentUser.isAdmin
  }

  private _loginUrl = 'http://localhost:3000/api/login'

  public loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
}