import { Component, OnInit } from '@angular/core';
import { UsersState } from './model/users-state.model'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { user } from './model/users.model';
import { AppState } from './model/app-state.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser: any;
  currentUser$: any;
  ngOnInit(): void {
    this.currentUser$ = this.store.pipe().subscribe(store => {
      this.currentUser = store.currentUser;
    });
  }
  constructor(private store: Store<AppState>){}

}
