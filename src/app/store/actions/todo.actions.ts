import { Action } from '@ngrx/store'
import { todoItem } from '../../model/todo.model'

export enum TodoActionTypes {
    ADD_ITEM = '[Item]Add todo',
    REMOVE_ITEM = '[Item]Remove todo',
    EDIT_ITEM = '[Item]Edit todo',
    MARK_ITEM = '[Item]Mark todo'
}

export class AddTodoItemAction implements Action {
    readonly type = TodoActionTypes.ADD_ITEM

    constructor(public payload: todoItem) { }
}

export class RemoveTodoItemAction implements Action {   
    readonly type = TodoActionTypes.REMOVE_ITEM

    constructor(public payload: string) { }
}

export class EditTodoItemAction implements Action {
    readonly type = TodoActionTypes.EDIT_ITEM

    constructor(public payload: todoItem) { }
}

export class MarkTodoItemAction implements Action{
    readonly type = TodoActionTypes.MARK_ITEM

    constructor(public payload: string){}
}

export type TodoAction = | AddTodoItemAction | RemoveTodoItemAction | EditTodoItemAction | MarkTodoItemAction;