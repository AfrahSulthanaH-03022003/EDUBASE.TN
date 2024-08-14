import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from './WhatsApp Image 2024-08-08 at 09.32.42.jpeg'; // Update this path to your logo image

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-toggle" onClick={toggleDropdown}>
                <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href='/academics'>Academics</a></li>
                    <li><a href="/sports">Sports</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/results">Results</a></li>
                    <li><a href="#language">Language</a></li>
                </ul>
                <div className="navbar-login">
                    <Link to="/login">
                        <button style={{marginRight:"20px"}}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button style={{marginRight:"20px"}}>Register</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
