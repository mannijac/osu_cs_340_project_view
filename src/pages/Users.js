import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const userColumnLabels = ["User ID", "Email", "Screen Name", "Country Code"];

var Users = function() {
    return (
        <div>
            <DataTable data={userColumnLabels}/>
            <Link to="/collections">User Collection</Link><br/>
            <Link to="/reviews">Reviews by User</Link>
        </div>
    );
}

export default Users;