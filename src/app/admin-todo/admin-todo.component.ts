import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '../model/app-state.model'
import { Observable } from 'rxjs';
import { todoItem } from '../model/todo.model';
import { AddTodoItemAction, RemoveTodoItemAction, MarkTodoItemAction } from '../store/actions/todo.actions';
import { v4 as uuid } from 'uuid'
import { MatDialog } from '@angular/material/dialog';
import { EditDialogueComponent } from '../edit-dialogue/edit-dialogue.component';
import { UsersState } from '../model/users-state.model'
import { TodoService} from '../todo.service'

@Component({
  selector: 'app-admin-todo',
  templateUrl: './admin-todo.component.html',
  styleUrls: ['./admin-todo.component.scss']
})
export class AdminTodoComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private usersStore: Store<UsersState>,
    public dialog: MatDialog, 
    private service: TodoService) { }
    
  todoItems$: Observable<Array<todoItem>>;
  currentUser: any;
  currentUser$: any;

  newTodoItem: todoItem = { id: '', text: '', isDone: false }

  ngOnInit(): void {
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

  deleteItem(id: string) {
    this.store.dispatch(new RemoveTodoItemAction(id));
    this.service.deleteTodo(id).subscribe(
      res => {console.log(res)},
      err => {console.error(err)}
    )
  }

  openEditingDialogue(id: string) {
    this.dialog.open(EditDialogueComponent, { data: { id } });
  }

  markTodoItem(id: string) {
    this.store.dispatch(new MarkTodoItemAction(id));
    this.service.markTodo(id).subscribe(
      res => {console.log(res)},
      err => {console.error(err)}
    )
  }
}
