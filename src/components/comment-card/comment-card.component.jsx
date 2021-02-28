import React from 'react'

import {Card, Accordion} from "react-bootstrap"

import "./comment-card.styles.scss"

const CommentCard = ({comment}) => {

    const {id, name, body} = comment;

    return (
        <Card className="comment-card">
            <Accordion.Toggle as={Card.Header} eventKey={id}>
                {name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={id}>
                <Card.Body>{body}</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default CommentCard
