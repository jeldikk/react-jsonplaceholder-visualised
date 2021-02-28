import UsersActionTypes from "./users.types"

const initial_data = {
    users: []
}

const usersReducer = (state=initial_data, action)=>{
    switch(action.type){
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer