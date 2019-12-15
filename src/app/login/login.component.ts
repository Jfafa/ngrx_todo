import { Component, OnInit } from '@angular/core';
import { UsersState } from '../model/users-state.model';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { user } from '../model/users.model';
import { loginService} from '../../shared/login.service'
import { EditUserDataAction } from '../store/actions/users.actions'
import { AppState } from '../model/app-state.model';

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

  constructor(private store: Store<AppState>){
    this.log = new loginService; 
  }

  currentUser: any;
  currentUser$: any;

  ngOnInit() {
    this.currentUser$ = this.store.pipe().subscribe(store => {
      this.currentUser = store.currentUser;
    });
  }

  login(){
    var user = this.log.isPresentInUsersList(this.loginObject.login, this.loginObject.password)
    if(user){
      this.loginObject.isLogged = true
      this.loginObject.isAdmin = user.isAdmin
      this.store.dispatch(new EditUserDataAction(this.loginObject))
    }
    else alert('wrong password or login')
    console.log(this.currentUser$)
  }

}
