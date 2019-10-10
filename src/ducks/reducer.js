// INITIAL STATE
const initialState = {
    loggedIn: false,
    user: null
}



// ACTION CONST
const UPDATE_USER = 'UPDATE_USER'


// ACTION BUILDERS
export const updateUser = (userObj, loggedIn) => {
    return {
        type: UPDATE_USER,
        payload: {userObj, loggedIn}
    }
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USER:
            console.log(action.payload)
            return {...state, user: action.payload.userObj, loggedIn: action.payload.loggedIn}
        default: return state
    }
}

export default reducer