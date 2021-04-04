import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'

import './navbar.css';

import UseAnimations from "react-useanimations";
import menu3 from 'react-useanimations/lib/menu3'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        if (isOpen) {
            return '300px'
        } else {
            return '0'
        }
    }

    return (
        <Router>
            <div className="my-nav">
                <a className="menu-logo" href="/">
                    J<span>unior</span>
                </a>
                <div className="hamburger" onClick={() => { setIsOpen(!isOpen) }}>
                    <UseAnimations animation={menu3} />
                </div>
                <div className="nav-menu" style={{ maxHeight: menuOpen() }}>
                    <Link to='/' className="menu-link">Home</Link>
                    <Link to='/posts' className="menu-link">Posts</Link>
                    <Link to='/my-account' className="menu-link">My Account</Link>
                </div>
            </div >
        </Router>
    )
}

export default Navbar;