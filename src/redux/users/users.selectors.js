import {createSelector} from 'reselect'

export const selectUsers = state => state.users.users;

export const getUserById = createSelector(
    selectUsers,
    (_, userId) => userId,
    (users, userid) => {
        return users.find((user) => user.id === userid)
    }
)