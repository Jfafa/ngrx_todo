import { Component, OnInit } from '@angular/core';
import { UsersState } from './model/users-state.model'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { user } from './model/users.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser$: Observable<user>
  ngOnInit(): void {
    this.currentUser$ = this.usersStore.select(store => store.currentUser);
  }
  constructor(private usersStore: Store<UsersState>){}

}
