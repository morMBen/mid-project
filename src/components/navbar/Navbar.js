import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css';
import UseAnimations from "react-useanimations";
import menu3 from 'react-useanimations/lib/menu3'


const Navbar = ({ openCloseLogMenu, userlog, userDetails }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const menuOpen = () => {
        if (isNavOpen) {
            return '300px'
        } else {
            return '0'
        }
    }
    // console.log(userDetails)



    return (

        <div className="my-nav" style={{ fontSize: '17px' }}>
            <Link to='/' className="menu-logo">
                J<span>unior</span>
            </Link>
            {userDetails && <div className="hamburger" onClick={() => { setIsNavOpen(!isNavOpen) }}>
                <UseAnimations animation={menu3} />
            </div>}
            {userDetails && <div className="nav-menu" style={{ maxHeight: menuOpen() }}>
                <Link to='/' className="menu-link">Our Home</Link>
                <Link to='/posts' className="menu-link">Wtite New Story</Link>
                <Link to={`/my-account/${userDetails.name.split(' ').join('')}`} className="menu-link">My Stories</Link>
                <div className="menu-name" >{userDetails.givenName}
                </div>
                <img style={{ height: "35px", borderRadius: "20px" }} src={userDetails.imageUrl} alt="my-img"></img>
            </div>}
            {!userlog &&
                <div
                    className="menu-link"
                    onClick={() => {
                        openCloseLogMenu()

                    }}>
                    Log In
                </div>}
        </div >
    )
}

export default Navbar;