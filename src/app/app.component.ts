import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from './model/app-state.model'
import { Observable } from 'rxjs';
import { todoItem } from './model/todo.model';
import { AddTodoItemAction } from './store/actions/todo.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>){}
  todoItems$: Observable<Array<todoItem>>


  ngOnInit(): void {
   this.todoItems$ = this.store.select(store => store.todoList)
   setTimeout(() => this.addItem(), 2000);
  }

  addItem(){
    this.store.dispatch(new AddTodoItemAction({id: '22', text: 'ttttt', isDone: true}));
  }
}
