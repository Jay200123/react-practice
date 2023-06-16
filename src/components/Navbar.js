import React from "react";
import icon from "../images/icon.jpg"

function Navbar(){
    return(
        <nav className="navbar">
            <img className="nav-logo" src={icon} alt="Automotive Icon"/>
            <h3>The Automotive Society of Engineering</h3>
            <ul>
                <li><i className="fa fa-home" aria-hidden="true"></i>Home</li>
                <li><i className="fa fa-info-circle" aria-hidden="true"></i>About</li>
                <li><i className="fa fa-phone" aria-hidden="true"></i>Contact Us</li>
                <li><i className="fa fa-bars" aria-hidden="true"></i></li>
            </ul>
        </nav>
    )

}

export default Navbar