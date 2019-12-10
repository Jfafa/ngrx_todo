import { todoItem } from './todo.model';

export interface AppState {
    readonly todoList: Array<todoItem>
};