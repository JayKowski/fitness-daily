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
            return action.categories;
        default:
            return state;
    }
}

function newWorkoutReducer(state = {}, action) {
    switch (action.type) {
        case 'NEW_WORKOUT':
            return action.workout;
        default:
            return state;
    }
}

function workoutsReducer(state = {}, action) {
    switch (action.type) {
        case 'WORKOUTS_REDCUER':
            return action.workouts;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ signInReducer, userDataReducer, signUpReducer, categoriesReducer, newWorkoutReducer, workoutsReducer });

export default rootReducer;