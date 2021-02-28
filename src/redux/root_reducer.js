import {combineReducers} from 'redux'

import postReducer from "./posts/posts.reducers"
import usersReducer from "./users/users.reducers"
import commentsReducer from './comments/comments.reducers'

export default combineReducers({
    posts: postReducer,
    users: usersReducer,
    comments: commentsReducer
})