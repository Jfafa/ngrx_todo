import { todoItem } from './todo.model';
import { user } from './users.model';

export interface AppState {
    readonly todoList: Array<todoItem>,
    readonly currentUser: user
};