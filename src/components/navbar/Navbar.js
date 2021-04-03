import React, { useState } from 'react'
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
        <div className="my-nav">
            <a className="menu-logo" href="">
                J<span>unior</span>
            </a>
            <div className="hamburger" onClick={() => { setIsOpen(!isOpen) }}>
                <UseAnimations animation={menu3} />
            </div>
            <div className="nav-menu" style={{ maxHeight: menuOpen() }}>
                <a className="menu-link" href="/">Home</a>
                <a className="menu-link" href="/posts">Posts</a>
                <a className="menu-link" href="/my-account">My Account</a>
            </div>
        </div >
    )
}

export default Navbar;