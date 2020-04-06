import React from 'react';
import Search from "./Search";

const Jumbotron = () => {

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Google Book Search</h1>
                <p className="lead">Find books you'll love. Save them for later.</p>
                <hr className="my-4" />
                <Search />
            </div>
        </div>
    )
}

export default Jumbotron;