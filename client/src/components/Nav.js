import React from 'react';

const Nav = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="/">Book Saver</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" id="list">
                            <a className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item" id="saved">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default Nav;
