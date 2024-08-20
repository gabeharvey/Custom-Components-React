import React from "react";

function Paragraph () {
    return (
        <p>This is a Test</p>
    )
}

function Segment () {
    return (
        <div>
            <ol>
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
            </ol>
        </div>
    )
}

function Home () {
    return (
        <div>
            <Paragraph />
            <h1>This is Gabe's React Page</h1>
            <ul>
                <li>I enjoy learning React because it is a hirable skill.</li>
                <li>I enjoy learning React because it was invented by Facebook and actively maintained.</li>
                <li>I enjoy learning React because it is a composable framework</li>
            </ul>
            <Segment />
        </div>
    )
}

export default Home;