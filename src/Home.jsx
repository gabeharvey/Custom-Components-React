import React from "react";
import logo from "./logo.svg"

function Home () {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} alt="logo" width={80}></img>
                </nav>
            </header>
            <h1>This is Gabe's React Page</h1>
            <ul>
                <li>I enjoy learning React because it is a hirable skill.</li>
                <li>I enjoy learning React because it was invented by Facebook and actively maintained.</li>
                <li>I enjoy learning React because it is a composable framework</li>
            </ul>
            <footer>
                ©2024 Harvey Development. All rights reserved.
            </footer>
        </div>
    )
}

export default Home;