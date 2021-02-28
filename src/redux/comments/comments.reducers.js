import CommentsActionTypes from "./comments.types"
import faker from 'faker'

import {FROM_DATE, TO_DATE} from '../../constants/index'
const initial_state = {

}

const commentsReducer = (state=initial_state, action)=>{
    // console.log({action})
    switch(action.type){
        case CommentsActionTypes.SET_COMMENTS_FOR_POST_ID:
            return {
                ...state,
                [action.payload.postId]: action.payload.data.map((comment) => ({
                    ...comment,
                    commentedOn: faker.date.between(FROM_DATE, TO_DATE),
                    likes: faker.random.number(),
                    dislikes: faker.random.number(),
                    replies: faker.random.number()
                }))
            }
        default:
            return state
    }
}

export default commentsReducer