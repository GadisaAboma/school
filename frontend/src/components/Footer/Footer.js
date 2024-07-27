import React from 'react';

import './Footer.css'
 
const Footer = () => {
    return (
        <div className="footer-container">
            <p>Copyright &copy; {new Date().getFullYear()} | All Rights Reserved </p>
        </div>
    );
}
 
 
export default Footer;