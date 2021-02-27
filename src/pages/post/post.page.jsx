import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'

import "./post.styles.scss"
import {Container, Breadcrumb} from "react-bootstrap"
import {getPostById} from "../../redux/posts/posts.selectors"
import {getUserById} from "../../redux/users/users.selectors"

import BreadcrumbItem from "../../components/breadcrumb-item/breadcrumb-item.component"
import CommentList from '../../components/comment-list/comment-list.component'

import ErrorBoundary from "../../error/error-boundary.component"

const PostPage = () => {

    const {postId} = useParams();
    const {pathname} = useLocation();

    

    const post = useSelector(state => getPostById(state, parseInt(postId)))
    const user = useSelector(state => getUserById(state, post.userId))

    console.log({postId, post})
    return (
        
        <Container fluid="md">
            <p>You are Here :</p>
            <Breadcrumb>
                <BreadcrumbItem toPath="/posts">posts</BreadcrumbItem>
                <BreadcrumbItem toPath={pathname}>{postId}</BreadcrumbItem>
            </Breadcrumb>
            <div className="post-page">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <div className="comments">
                <h3>Comments</h3>
                <ErrorBoundary>
                    <CommentList postId={postId} />
                </ErrorBoundary>
                
            </div>
        </Container>
        
    )
}

export default PostPage
