import { todoItem } from "../../model/todo.model";
import { TodoAction, TodoActionTypes } from '../actions/todo.actions';

const initialState: Array<todoItem> = [
    {
        id:"1",
        text: "test",
        isDone: true
    },
    {
        id:"2",
        text: "te2st",
        isDone: true
    }
];

export function todoReducer(state: Array<todoItem> = initialState, action: TodoAction){
    
    switch(action.type){
        case TodoActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}