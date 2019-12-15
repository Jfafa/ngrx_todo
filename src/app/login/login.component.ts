import { Component, OnInit } from '@angular/core';
import { UsersState } from '../model/users-state.model';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { user } from '../model/users.model';
import { loginService} from '../../shared/login.service'
import { EditUserDataAction } from '../store/actions/users.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  log: any;

  loginObject = {
    login: '',
    password: '',
    isAdmin: false,
    isLogged: false
  }

  constructor(private usersStore: Store<UsersState>){
    this.log = new loginService; 
  }

  currentUser$: Observable<user>

  ngOnInit() {
    this.currentUser$ = this.usersStore.select(store => store.currentUser);
  }

  login(){
    var user = this.log.isPresentInUsersList(this.loginObject.login, this.loginObject.password)
    if(user){
      this.loginObject.isLogged = true
      this.loginObject.isAdmin = user.isAdmin
      this.usersStore.dispatch(new EditUserDataAction(this.loginObject))
    }
    else alert('wrong password or login')
    console.log(this.currentUser$)
  }

}
