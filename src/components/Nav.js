import React from 'react';
import { Link } from 'react-router-dom';
import { GiRetroController } from "react-icons/gi";
import NavLink from './NavLink';

export default function Nav(props) {
    return (
        <div className='shadow nav-bar'>
          <nav>
            <span className={'icon-container'}><GiRetroController className='icon' size={30} /></span>
            <span><b>Cartridge Collector</b></span>
            <span><Link to="/">Home</Link></span>
            {props.data.map((table, i) => <NavLink key={i} table={table}/>)}
          </nav>
          
        </div>
    );
}
