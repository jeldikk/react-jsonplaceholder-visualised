import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {getUserById} from "../../redux/users/users.selectors"

const UserPage = () => {

    const {userId} = useParams();

    const user = useSelector(state => getUserById(state, userId))

    return (
        <div className="user-page">
            <pre>
                {
                    JSON.stringify(user)
                }
            </pre>
        </div>
    )
}

export default UserPage
