import React from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.css'

const SiteHeader = () => (
    <div className="row">
        <Link to='/'><p>Home</p></Link> | <Link to="/about-game"><p>About Samurai Shodown</p></Link> | <Link to="/about-site"><p>About This Site</p></Link>
    </div>
);

export default SiteHeader;