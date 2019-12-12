import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../shared/todos.service';
import { AppComponent } from '../app.component'
import { Store } from '@ngrx/store'
import { AppState } from '../model/app-state.model'
import { Observable } from 'rxjs';
import { todoItem } from '../model/todo.model';
import { AddTodoItemAction } from '../store/actions/todo.actions';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  

  private loading: boolean = true;

  constructor(private store: Store<AppState>){}
  todoItems$: Observable<Array<todoItem>>
  newTodoItem: todoItem = {id: '', text: '', isDone: false}

  ngOnInit(): void {
   this.todoItems$ = this.store.select(store => store.todoList);
  }
  addItem(){
    this.newTodoItem.id = uuid();
    this.store.dispatch(new AddTodoItemAction(this.newTodoItem));
    this.newTodoItem = {id: '', text: '', isDone: false}
  }
  
/*
  onChange(id: number){
    this.todosService.onToggle(id)
  }

  removeTodo(id: number){
    this.todosService.removeTodo(id)
  }

  editTodo(id: number){
    
  }
  */

}
