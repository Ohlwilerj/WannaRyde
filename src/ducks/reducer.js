// INITIAL STATE
const initialState = {
    loggedIn: false,
    user: null,
    resortInfo: ''
}



// ACTION CONST
const UPDATE_USER = 'UPDATE_USER'
const RESORT_INFO = 'RESORT_INFO'


// ACTION BUILDERS
export const updateUser = (userObj, loggedIn) => {
    return {
        type: UPDATE_USER,
        payload: {userObj, loggedIn}
    }
}

export const updateResortInfo = (resortObj) => {
    return{
        type: RESORT_INFO,
        payload: resortObj
    }
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USER:
            console.log(action.payload)
            return {...state, user: action.payload.userObj, loggedIn: action.payload.loggedIn}
        case RESORT_INFO:
            return {...state, resortInfo: action.payload.resortObj}
        default: return state
    }
}

export default reducer