import React from 'react';
import Search from "./Search";

const Jumbotron = () => {
    let page = "search"
    let title = "Google Book Search"
    let tagline = "Find books you'll love. Save them for later."
    
    if (window.location.href.includes("saved")){
        page = "saved"
        title = "Your Reading List"
        tagline = "Here are the books you saved for later"
    }

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{tagline}</p>
                
                {page === "search" && <><hr className="my-4" /> <Search /></>}
            </div>
        </div>
    )
}

export default Jumbotron;