import { Component, OnInit } from '@angular/core';
import { UsersState } from '../model/users-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from '../model/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersStore: Store<UsersState>){}

  currenUser$: Observable<user>

  ngOnInit() {
    this.currenUser$ = this.usersStore.select(store => store.currentUser);
  }

}
