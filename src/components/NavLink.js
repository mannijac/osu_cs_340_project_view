import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink(props) {
    return (
        <span>
            <Link to={`/${props.table.name}`}>{props.table.label}</Link>
        </span>
    )
}