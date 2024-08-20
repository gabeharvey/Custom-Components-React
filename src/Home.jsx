import React from "react";
import "./App.css";

function Home () {
    return (
        <div className="App">
            <h1 className='main-header'>This is Gabe's React Page</h1>
            <ul className="main-list">
                <li>I enjoy learning React because it is a hirable skill.</li>
                <li>I enjoy learning React because it was invented by Facebook and actively maintained.</li>
                <li>I enjoy learning React because it is a composable framework</li>
            </ul>
        </div>
    )
}

export default Home;