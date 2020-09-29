import React from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.css'

const SiteHeader = () => (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to='/' className="navbar-brand">Samurai Shodown 5 Special Frame Dojo</Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <Link to="/about-game" className="nav-link">About Samurai Shodown</Link>
                <Link to="/about-site" className="nav-link">About This Site</Link>
            </ul>
        </div>
    </nav>
);

export default SiteHeader;