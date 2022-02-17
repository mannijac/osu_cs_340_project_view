import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const collectionColumnLabels = ["Title", "Platform", "Genre", "Developer", "Publisher", "Release Date"];

var Collections = function() {
    return (
        <div>
            <DataTable data={collectionColumnLabels}/>
            <Link to="/wishes">Wishes</Link><br/>
            <Link to="/reviews">Reviews by User</Link>  
        </div>
    );
}

export default Collections;