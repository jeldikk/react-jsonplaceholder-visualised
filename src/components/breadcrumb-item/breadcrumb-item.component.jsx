import React from 'react'

import {Link} from 'react-router-dom'

const BreadcrumbItem = ({toPath, children}) => {

    return (
        <li className="breadcrumb-item">
            <Link to={toPath}>{children}</Link>
        </li>
    )
}

export default BreadcrumbItem
