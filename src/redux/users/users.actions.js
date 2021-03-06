import UsersActionTypes from "./users.types"

import {fetchUsersData} from "../../axios/axios.util"

const setUsers = (users)=>{
    return {
        type: UsersActionTypes.SET_USERS,
        payload: users
    }
}

// thunk action creator to fetch users
export const fetchUsers = ()=>{
    return async (dispatch)=>{
        let results = await fetchUsersData();

        dispatch(setUsers(results))
    }
}