import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const wishColumnLabels = ["User", "Title", "Platform", "Genre", "Developer", "Publisher", "Release Date"];

var Wishes = function() {
    return (
        <div>
            <DataTable data={wishColumnLabels}/>
            <Link to="/collections">User Collection</Link><br/>
            <Link to="/reviews">Reviews by User</Link>
        </div>
    );
}

export default Wishes;