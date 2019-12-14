import { user } from "../../model/users.model";
import { UsersAction } from '../actions/users.actions';
import { UsersActionType } from '../actions/users.actions';

const initialState: user = {
        login: '',
        password: '',
        isAdmin: false,
        isLogged: false,
    };

export function usersReducer(state: user = initialState, action: UsersAction) {

    switch (action.type) {
        case UsersActionType.EDIT_USER_DATA:
        state = action.payload    
        return state;
        default:
            return state;
    }
}
