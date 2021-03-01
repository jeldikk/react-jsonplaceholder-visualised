import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

import "./user.styles.scss"
import {Container, Row, Col, Card} from 'react-bootstrap'

import {getUserById} from "../../redux/users/users.selectors"
import {getPostsByUserId} from "../../redux/posts/posts.selectors"

const UserPage = () => {

    const {userId} = useParams();

    const user = useSelector(state => getUserById(state, parseInt(userId)))
    const posts = useSelector(state => getPostsByUserId(state, parseInt(userId)))
    console.log({user, userId, posts})
    const {name, username, website, imageUrl, phone, email} = user;
    
    return (
        <div className="user-page">
            <Container fluid="md">
                <Row>
                    <Col sm={4}>
                        <Card className="inner-user-card shadow shadow-sm">
                            <Card.Img variant="top" src={imageUrl} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="text-muted">{username}</Card.Subtitle>
                                <code>{email}</code>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <div className="details-wrapper">
                            <p className="name">{name}</p>
                            <p className="username">{username}</p>
                            <p className="website">{website}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        Here goes the address information, company information of the person
                    </Col>
                    <Col sm={8}>
                        Here goes the google map with indicator according to co-ordinates
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default UserPage
