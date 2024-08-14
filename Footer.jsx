import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:edubasetn@example.com">edubasetn@example.com</a></p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are committed to providing the best education resources for students. Our mission is to support and enhance the learning experience through innovative and engaging methods.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
