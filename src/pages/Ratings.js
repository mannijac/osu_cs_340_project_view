import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const ratingsColumnLabels = ["Screen Name", "Game", "Rating", "Comments"]; 

var Ratings = function() {
    return (
        <div>
            <DataTable data={ratingsColumnLabels}/>
            <Link to="/items">Items</Link><br/>
            <Link to="/wishes">Wishes</Link>
        </div>
    );
}

export default Ratings;