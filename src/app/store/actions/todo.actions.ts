import { Action } from '@ngrx/store'
import { todoItem } from '../../model/todo.model'

export enum TodoActionTypes {
    ADD_TODO = 'Add todo',
}

export class AddTodoItemAction implements Action{
    readonly type: TodoActionTypes

    constructor(public payload: todoItem){}
}

export type TodoAction = AddTodoItemAction;