import CommentsActionTypes from "./comments.types"
import {fetchCommentsByPostId} from "../../axios/axios.util"

const setCommentsDataForPostid = ({postid, data})=>{
    return {
        type: CommentsActionTypes.SET_COMMENTS_FOR_POST_ID,
        payload: {
            postId: postid,
            data
        }
    }
}

export const fetchCommentsData = (postid) => {
    return async (dispatch) => {
        let data = await fetchCommentsByPostId(postid)
        console.log({'data in dispatch': data})
        dispatch(setCommentsDataForPostid({postid, data}))
    }
}