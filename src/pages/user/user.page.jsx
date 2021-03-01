import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import LazyLoad from 'react-lazyload'

import "./user.styles.scss"
import {Container, Row, Col, Card} from 'react-bootstrap'

import {getUserById} from "../../redux/users/users.selectors"
import {getPostsByUserId} from "../../redux/posts/posts.selectors"

import PostList from "../../components/post-list/post-list.component"

const UserPage = () => {

    const {userId} = useParams();

    const user = useSelector(state => getUserById(state, parseInt(userId)))
    const posts = useSelector(state => getPostsByUserId(state, parseInt(userId)))
    console.log({user, userId, posts})
    const {name, username, website, imageUrl, phone, email, address:{city, geo:{lat,lon}, street, suite, zipcode}, company:{bs, catchPhrase, name: companyName}} = user;
    
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
                                <Card.Subtitle className="text-danger">{email}</Card.Subtitle>
                                <Card.Subtitle className="text-danger">{phone}</Card.Subtitle>
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
                        <Card className="address-card shadow shadow-sm">
                            <Card.Header>{`${name} ( @${username} )`}</Card.Header>
                            <Card.Body>
                                <Card.Title className="text-center">Address Details</Card.Title>
                                <Card.Text>{street}</Card.Text>
                                <Card.Text>{suite}</Card.Text>
                                <Card.Text>{city} - {zipcode}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Company Details
                                </Card.Title>
                                <Card.Text>{companyName}</Card.Text>
                                <Card.Text>{catchPhrase}</Card.Text>
                                <Card.Text>{bs}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        Here goes the google map with indicator according to co-ordinates
                    </Col>
                    
                </Row>
                <div className="post-list">
                    <h3 className="text-center">{username} made {posts.length} posts</h3>
                    <LazyLoad once>
                        <PostList posts={posts} />
                    </LazyLoad>
                </div>
            </Container>
        </div>
    )
}

export default UserPage
