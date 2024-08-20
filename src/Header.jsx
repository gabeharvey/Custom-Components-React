import React from 'react';
import logo from "./logo.svg"

function Header () {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" width={80}></img>
            </nav>
        </header>
    )
}

export default Header;