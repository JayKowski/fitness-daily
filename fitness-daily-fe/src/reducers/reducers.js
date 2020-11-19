import { combineReducers } from 'redux';

function signInReducer(state = {}, action) {
    switch (action.type) {
        case 'USER_SIGNIN':
            return action.user;
        default:
            return state;
    }
}

function signUpReducer(state = {}, action) {
    switch (action.type) {
        case 'USER_SIGNUP':
            return action.user;
        default:
            return state;
    }
}

function userDataReducer(state = {}, action) {
    switch (action.type) {
        case 'USER_DATA':
            return action.user;
        default:
            return state;
    }
}

function categoriesReducer(state = [], action) {
    switch (action.type) {
        case 'CATEGORIES':
        console.log(action.categories)
            return action.categories;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ signInReducer, userDataReducer, signUpReducer, categoriesReducer });

export default rootReducer;