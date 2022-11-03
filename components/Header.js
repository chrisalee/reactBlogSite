import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
        <nav className="header__menu">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
        </nav>
        <div className='header__social'>
        <ul className="header__social--list">
            <li className="header__social--list__item">
                <a href="https://www.linkedin.com/in/christopheralee22/" className="header__social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="header__social--list__item">
                <a href="https://twitter.com/chrisl222" className="header__social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className="header__social--list__item">
                <a href="https://www.instagram.com/chrisalee222/" className="header__social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="header__social--list__item">
                <a href="https://www.facebook.com/chrisalee222/" className="header__social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
            </li>
            <li className="header__social--list__item">
                <a href="https://github.com/chrisalee" className="header__social--list__link" target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
        </div>
    </header>
    )
}

export default Header
