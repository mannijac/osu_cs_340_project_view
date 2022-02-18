import React from 'react';
import { Link } from 'react-router-dom';
import { GiRetroController } from "react-icons/gi";

function Nav() {
    return (
        <div className='shadow nav-bar'>
          <nav>
            <span className={'icon-container'}><GiRetroController className='icon' size={30} /></span>
            <span><b>Cartridge Collector</b></span>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/users">Users</Link></span>
            <span><Link to="/games">Games</Link></span>
            <span><Link to="/collections">Collection</Link></span>
            <span><Link to="/ratings">Ratings</Link></span>
            <span><Link to="/wishes">Wishes</Link></span>
          </nav>
          
        </div>
    );
}

export default Nav;