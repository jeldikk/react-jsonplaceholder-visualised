import React, {useState} from 'react'

import {Navbar, Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'

const Header = () => {

    const [expanded, setExpanded] = useState(false)

    const onNavSelect = (eventKey, event)=>{
        // console.log({eventKey, event})
        // console.log('onSelect')
        setExpanded(!expanded)
    }

    const onToggleHandler = (toggleInput)=>{
        // console.log({arg})
        console.log('onToggle')
        setExpanded(toggleInput)
    }

    return (
        <header className="header">
            <Navbar bg="primary"  expand="md" sticky="top" onToggle={onToggleHandler} expanded={expanded}>
                <Link className="navbar-brand" to="/">Json blogs</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Link className="nav-link" onClick={()=> setExpanded(false)} to="/users">Users</Link>
                        <Link className="nav-link" onClick={()=> setExpanded(false)} to="/posts">Posts</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
