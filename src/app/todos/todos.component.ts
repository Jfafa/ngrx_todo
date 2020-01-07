import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '../model/app-state.model'
import { Observable } from 'rxjs';
import { todoItem } from '../model/todo.model';
import { AddTodoItemAction, RemoveTodoItemAction, MarkTodoItemAction } from '../store/actions/todo.actions';
import { v4 as uuid } from 'uuid'
import { MatDialog } from '@angular/material/dialog';
import { UsersState } from '../model/users-state.model'
import { GetTodosItemsAction } from '../store/actions/todo.actions'
import { TodoService} from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private usersStore: Store<UsersState>,
    public dialog: MatDialog, 
    private service: TodoService) { }
    
  todoItems$: Observable<Array<todoItem>>;
  currentUser: any;
  currentUser$: any;

  newTodoItem: todoItem = { id: '', text: '', isDone: false }

  ngOnInit() {
    this.store.dispatch(new GetTodosItemsAction())
    this.todoItems$ = this.store.select(store => store.todoList);
    this.currentUser$ = this.store.pipe().subscribe(store => {
      this.currentUser = store.currentUser;
    });
  }

  addItem() {
    this.newTodoItem.id = uuid();
    this.store.dispatch(new AddTodoItemAction(this.newTodoItem));
    this.service.addTodo(this.newTodoItem).subscribe(
      res => {console.log(res)},
      err => {console.error(err)}
    )
    this.newTodoItem = { id: '', text: '', isDone: false }
  }

  markTodoItem(id: string) {
    this.service.markTodo(id).subscribe(
      res => {console.log(res)},
      err => {console.error(err)}
    )
    this.store.dispatch(new MarkTodoItemAction(id));
  }
}
