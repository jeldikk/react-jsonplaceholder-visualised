import {createSelector} from 'reselect'

const selectComments = state => state.comments;

export const selectCommentsByKey = createSelector(
    selectComments,
    (_, postId) => postId,
    (comments, postId) => comments[postId]
)

export const selectCommentsCountByPostId = createSelector(
    selectComments,
    (_, postId) => postId,
    (comments, postId) => {
        if(!comments[postId]){
            return 0
        }
        else{
            return comments[postId].length
        }
    }
)