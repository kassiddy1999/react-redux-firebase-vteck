import React from 'react';
// to get access to an active class when the link is clicked
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
    return (
        <ul className = "right">
            <li><NavLink to = '/create'>New Project</NavLink></li>
            <li><NavLink to = '/'>Log Out</NavLink></li>
            <li><NavLink to = '/' className = "btn btn-floating blue lighten-1">Vt</NavLink></li>
        </ul>
        
    )
}
