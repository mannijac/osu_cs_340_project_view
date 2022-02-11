import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <Link to="/users">User List</Link><br/>
            <Link to="/items">Item List</Link>
        </div>
    );
}

export default HomePage;