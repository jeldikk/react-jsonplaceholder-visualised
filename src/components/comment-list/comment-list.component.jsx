import React, {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {Accordion} from 'react-bootstrap'

import {fetchCommentsData} from "../../redux/comments/comments.actions"

import CommentCard from "../comment-card/comment-card.component"
import {selectCommentsByKey} from "../../redux/comments/comments.selectors"

const CommentList = ({postId}) => {

    const dispatch = useDispatch();

    const comments = useSelector((state) => selectCommentsByKey(state, postId))

    useEffect(() => {
        if(!comments)
            dispatch(fetchCommentsData(postId))
        
    }, [dispatch])

    // console.log({comments})
    // throw new Error("this is error")
    return (
        <Accordion defaultActiveKey="0">
            {
                comments ?
                comments.map((comment)=>{
                    return <CommentCard comment={comment} key={comment.id} />
                }) :
                null
            }
        </Accordion>
    )
}

export default CommentList
