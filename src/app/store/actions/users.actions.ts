import { Action } from '@ngrx/store'
import { user } from '../../model/users.model'


export enum UsersActionType{
    EDIT_USER_DATA = '[Users]Edit user'
}

export class AddTodoItemAction implements Action {
    readonly type = UsersActionType.EDIT_USER_DATA

    constructor(public payload: user) { }
}

export type UsersAction = | AddTodoItemAction;