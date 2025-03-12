import React, { useState } from "react";
import logo from "../images/Logo.svg"
import menu_icon from "../images/🦆 icon _hamburger menu_.svg"
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar">
            <a href="/">
                <img src={logo} alt="Little Lemon logo"/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <img src={menu_icon} alt />
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;