import React from 'react';
import logo from "./logo.svg"
import "./App.css";

function Header () {
    return (
        <header>
            <nav className="main-nav">
                <img className='logo-style' src={logo} alt="logo"></img>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;