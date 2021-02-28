import React from 'react'

import {useSelector} from 'react-redux'
import {Container} from "react-bootstrap"
import UserList from "../../components/user-list/user-list.component"

import {selectUsers} from "../../redux/users/users.selectors"

const UserListPage = () => {

    const users = useSelector(selectUsers)
    console.log(users)
    return (
        <div className="userlist">
            <h1 className="text-center">Users</h1>
            <Container fluid="md">
                <UserList users={users} />
            </Container>
            
        </div>
    )
}

export default UserListPage
