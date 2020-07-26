import React from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.css'

const SiteHeader = () => (
    <div>
        <Link to='/'><p>Samurai Shodown Frame Dojo</p></Link>
    </div>
)

export default SiteHeader;