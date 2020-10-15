import React from 'react';
// the link is to create a form of route 
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        // the attribute is to wrap the content and give it a dark grey look
            <nav className = "nav-wrapper grey darken-3">
                <div className = "container">
                    <Link to = '/' className = "brand-logo">Vteck</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
    )
}

export default Navbar

