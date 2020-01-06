import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from './model/app-state.model'
import { UsersState } from './model/users-state.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;
  constructor(private store: Store<AppState>,
    private usersStore: Store<UsersState>,) {
      this.store.pipe().subscribe(store => {
      this.currentUser = store.currentUser;
    });
    console.log('check'+this.currentUser)}



users = [{
    login: 'user',
    password: '1234',
    isAdmin: false,
},
{
    login: 'admin',
    password: '12345',
    isAdmin: true,
}
]


isUserLoggedIn() :boolean{
  return this.currentUser.isUserLoggedIn
}

isUserAdmin() :boolean{
  return this.currentUser.isAdmin
}


public isPresentInUsersList(login: string, password: string){
    let isInList;
    this.users.forEach(user => {
        if(user.login === login && user.password === password){
            isInList = user;
        }
    });
    return isInList; 
}
}