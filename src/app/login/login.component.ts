import { Component, OnInit } from '@angular/core';
import { UsersState } from '../model/users-state.model';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { user } from '../model/users.model';
import { AuthService} from '../auth.service'
import { EditUserDataAction } from '../store/actions/users.actions'
import { AppState } from '../model/app-state.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  loginObject = {
    login: '',
    password: '',
    isAdmin: false,
    isLogged: false
  }

  apiLoginObject = {
    login: '',
    password: ''
  }

  constructor(private store: Store<AppState>, private router: Router, private log: AuthService){ 
  }

  currentUser: any;
  currentUser$: any;

  ngOnInit() {
    this.currentUser$ = this.store.pipe().subscribe(store => {
      this.currentUser = store.currentUser;
    });
  }

  login(){
    console.log(this.apiLoginObject)
    this.log.loginUser(this.apiLoginObject).subscribe(
      res => {
        let user = res;
        this.loginObject.isLogged = true
        this.loginObject.isAdmin = user.isAdmin
        this.loginObject.login = user.login
        this.loginObject.password = user.password
        this.store.dispatch(new EditUserDataAction(this.loginObject))
        this.router.navigate(['/dashboard']);
      },
      err => {
        alert('Wrong password or login')
         console.error(111, err)
      }
    )
  }
}
