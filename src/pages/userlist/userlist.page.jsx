import React from 'react'
import {useSelector} from 'react-redux'
import {Container, Breadcrumb} from "react-bootstrap"
import UserList from "../../components/user-list/user-list.component"
import BreadcrumbItem from "../../components/breadcrumb-item/breadcrumb-item.component"

import {selectUsers} from "../../redux/users/users.selectors"

const UserListPage = () => {

    const users = useSelector(selectUsers)
    console.log(users)
    return (
        <div className="userlist">
            
            <Container fluid="md">
                <p>You are here:</p>
                <Breadcrumb>
                    <BreadcrumbItem toPath="/users">users /</BreadcrumbItem>
                </Breadcrumb>
                <h1 className="text-center">Users</h1>
                <UserList users={users} />
            </Container>
            
        </div>
    )
}

export default UserListPage
