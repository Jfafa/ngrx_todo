import { todoItem } from "../../model/todo.model";
import { TodoAction, TodoActionTypes } from '../actions/todo.actions';

const initialState: Array<todoItem> = [];

export function todoReducer(state: Array<todoItem> = initialState, action: TodoAction) {

    switch (action.type) {
        case TodoActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case TodoActionTypes.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload);
        case TodoActionTypes.EDIT_ITEM:
            state.forEach(item => item.id === action.payload.id ? item.text = action.payload.text : 0);
            return state;
        case TodoActionTypes.MARK_ITEM:
            state.forEach(item => item.id === action.payload ? item.isDone = !item.isDone : 0);
            return state;
        case TodoActionTypes.GET_TODOS_SUCCESS:
            console.log(222222222)
            const items: todoItem[] = action.payload;
            return items
       default:
            return state;
    }
}
