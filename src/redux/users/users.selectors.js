import {createSelector} from 'reselect'

export const selectUsers = state => state.users.users;

export const getUserById = createSelector(
    selectUsers,
    (_, userId) => userId,
    (users, userid) => {
        // console.log({users, userid})
        let myuser =  users.find((user) => user.id === userid);
        // console.log({myuser});
        return myuser;
    }
)