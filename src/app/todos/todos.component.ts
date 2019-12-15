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
import { user } from '../model/users.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private usersStore: Store<UsersState>,
    public dialog: MatDialog, ) { }
    
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
    this.newTodoItem = { id: '', text: '', isDone: false }
  }

  deleteItem(id: string) {
    this.store.dispatch(new RemoveTodoItemAction(id));
  }

  openEditingDialogue(id: string) {
    this.dialog.open(EditDialogueComponent, { data: { id } });
  }

  markTodoItem(id: string) {
    this.store.dispatch(new MarkTodoItemAction(id));
  }

  
}
