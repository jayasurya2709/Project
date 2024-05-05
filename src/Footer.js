import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="copy-right">© 2024 Your Company Name</div>
        </footer>
    );
};

export default Footer;
