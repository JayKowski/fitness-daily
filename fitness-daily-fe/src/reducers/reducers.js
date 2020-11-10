import { combineReducers } from 'redux';

function signUpReducer(state = {}, action) {
    switch (action.type) {
        case 'USER_SIGNUP':
            return action.user;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ signUpReducer })

export default rootReducer;