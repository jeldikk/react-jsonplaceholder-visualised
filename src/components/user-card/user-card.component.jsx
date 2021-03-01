import React from 'react'

import "./user-card.styles.scss"
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const UserCard = ({user}) => {
    const {name, username, email} = user;
    return (
        <Card border="info" className="user-card">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
                <Card.Subtitle className="text-danger">{email}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-right">
                <Link to={`users/${user.id}`}>
                    <Button variant="primary">Show more ...</Button>
                </Link>
            </Card.Footer>
        </Card>
    )
}

export default UserCard
