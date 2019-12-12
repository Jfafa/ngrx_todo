import { Action } from '@ngrx/store'
import { todoItem } from '../../model/todo.model'

export enum TodoActionTypes {
    ADD_ITEM = '[Item]Add todo',
}

export class AddTodoItemAction implements Action{
    readonly type = TodoActionTypes.ADD_ITEM
    constructor(public payload: todoItem){}
}

export type TodoAction = AddTodoItemAction;