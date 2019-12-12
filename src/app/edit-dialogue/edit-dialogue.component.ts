import { Component, OnInit, Input, Inject } from '@angular/core';
import { todoItem } from '../model/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../model/app-state.model';
import { EditTodoItemAction } from '../store/actions/todo.actions'
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-edit-dialogue',
  templateUrl: './edit-dialogue.component.html',
  styleUrls: ['./edit-dialogue.component.scss']
})
export class EditDialogueComponent implements OnInit {

  editId: string;
  editTodoItem: todoItem = {id: '', text: '', isDone: false}

  public editTodoText: string
 
  constructor(private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.editId = data.id;
  }

  ngOnInit() {
  }

  setEditId(){

  }

  editItem(){
    this.editTodoItem.id = this.editId;
    this.store.dispatch(new EditTodoItemAction(this.editTodoItem));
    this.editTodoItem.text = '';
  }

}
