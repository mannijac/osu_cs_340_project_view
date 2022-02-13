import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='shadow nav-bar'>
          <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/users">User List</Link></span>
            <span><Link to="/items">Item List</Link></span>
          </nav>
          
        </div>
    );
}

export default Nav;