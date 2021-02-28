import React from 'react'

import "./user-list.styles.scss"
import {Row, Col} from "react-bootstrap"
import UserCard from "../user-card/user-card.component"

const UserList = ({users}) => {

    return (
        <div className="user-list">
            <Row>
                {
                    users.map((user) => {
                        return (
                            <Col sm={6} key={user.id} md={4} >
                                <UserCard user={user} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default UserList
