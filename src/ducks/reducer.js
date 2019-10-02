// INITIAL STATE
const initialState = {
    username: '',
    password: '',
    profileImg: '',
    loggedIn: false,
    rider: null,
}



// ACTION CONST
const UPDATE_RIDER = 'UPDATE_RIDER'


// ACTION BUILDERS
export const updateRider = (riderObj) => {
    return {
        type: UPDATE_RIDER,
        payload: riderObj
    }
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_RIDER:
            return {...state, rider: action.payload}
        default: return state
    }
}

export default reducer