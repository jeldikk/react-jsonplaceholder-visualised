import React from 'react'

import "./home.styles.scss"

const Homepage = () => {
    return (
        <div className="homepage">
            <h1 className="title">Blog Prototype(@jeldikk)</h1>
            <div className="content">
                <div className="description">
                    A Mobile responsive blog prototype designed with users, posts, comments availing the jsonplaceholder.typicode api
                </div>
                <div className="repo">
                    You can find the github repo code for this webapp <a rel="noreferrer" href="https://github.com/jeldikk/react-jsonplaceholder-visualised" target="_blank">here</a>
                </div>
                
            </div>
        </div>
    )
}

export default Homepage
