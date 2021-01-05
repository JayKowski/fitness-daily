export function userSignin(user) {
    return {
        type: 'USER_SIGNIN',
        user,
    };
}

export function userSignup(user) {
    return {
        type: 'USER_SIGNUP',
        user,
    }
}

export function userData(user) {
    return {
        type: 'USER_DATA',
        user,
    }
}

export function categories(categories) {
    return {
        type: 'CATEGORIES',
        categories,
    }
}

export function newWorkout(workout) {
    return {
        type: 'NEW_WORKOUT',
        workout,
    }
}

export function workouts(workouts) {
    return {
        type: 'WORKOUTS_REDUCER',
        workouts,
    }
}