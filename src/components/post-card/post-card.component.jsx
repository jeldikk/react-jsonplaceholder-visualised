import React from 'react'
import {useSelector} from 'react-redux'

import {Link} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'

import {GrLike} from 'react-icons/gr'
import {GrDislike} from 'react-icons/gr'
import {FaRegCommentDots} from 'react-icons/fa'


import "./post-card.styles.scss"

import {getUserById} from "../../redux/users/users.selectors"

const PostCard = ({post}) => {

    const {userId, id, title, body, created, likes, dislikes, replies} = post;
    const user = useSelector(state => getUserById(state,userId))
    // console.log(user)
    return (
        <Card className="post-card shadow shadow">
            <Card.Header>
                <p className="title">{title.slice(0, 30)}...</p>
                <Link className="showmore-link" to={`/posts/${id}`}>
                    <Button variant="success" size="sm">Show more ...</Button>
                </Link>
            </Card.Header>
            <Card.Body>
                <Card.Text>{body.slice(0,20)}...</Card.Text>
                <p className="text-muted timestamp">{created.toString()}</p>
                <div className="likes-dislikes-replies">
                    <span className="icon"><GrLike /> {likes}</span>
                    <span className="icon"><GrDislike /> {dislikes}</span>
                    {/* <span><FaRegCommentDots />{replies}</span> */}
                </div>
            </Card.Body>
            {/* <h4>{title}</h4> */}
            {/* <p>{body}</p> */}
            {/* <p>Posted by: <code>{user.name}(@{user.username})</code></p>
            <p>Created On: <code>{created.toUTCString()}</code></p> */}
            
        </Card>
    )
}

export default PostCard
