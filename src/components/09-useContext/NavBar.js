import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useConext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/" exact activeClassName="active" className="nav-link" aria-current="page">Home</NavLink>
                        <NavLink to="/about" exact activeClassName="active" className="nav-link">About</NavLink>
                        <NavLink to="/login" exact activeClassName="active" className="nav-link">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
