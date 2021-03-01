import React from 'react'

import {Card, Accordion} from "react-bootstrap"
import {FcLike, FcDislike, FcComments} from 'react-icons/fc'
import "./comment-card.styles.scss"

const CommentCard = ({comment}) => {

    const {id, name, body, likes, dislikes, replies} = comment;

    return (
        <Card className="comment-card">
            <Accordion.Toggle as={Card.Header} eventKey={id}>
                {name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={id}>
                <Card.Body>
                    <p className="body">{body}</p>
                    <p className="likes-dislikes-replies">
                        <span className="icon-wrapper"><FcLike /> {likes} </span>
                        <span className="icon-wrapper"><FcDislike /> {dislikes} </span>
                        <span className="icon-wrapper"><FcComments /> {replies} </span>
                    </p>
                </Card.Body>
                
            </Accordion.Collapse>
        </Card>
    )
}

export default CommentCard
