import React from 'react';
import { Link } from 'react-router-dom';

var Users = function() {
    return (
        <div>
            <Link to="/collections">User Collection</Link><br/>
            <Link to="/reviews">Reviews by User</Link>
        </div>
    );
}

export default Users;