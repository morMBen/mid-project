import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css';

import GoogleLogIn from '../googleLogIn/GoogleLogIn'
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
        <div className="my-nav">
            <Link to='/' className="menu-logo">
                J<span>unior</span>
            </Link>
            <div className="hamburger" onClick={() => { setIsOpen(!isOpen) }}>
                <UseAnimations animation={menu3} />
            </div>
            <div className="nav-menu" style={{ maxHeight: menuOpen() }}>
                <GoogleLogIn />
                <Link to='/' className="menu-link">Home</Link>
                <Link to='/posts' className="menu-link">Posts</Link>
                <Link to='/my-account' className="menu-link">My Account</Link>
            </div>
        </div >
    )
}

export default Navbar;