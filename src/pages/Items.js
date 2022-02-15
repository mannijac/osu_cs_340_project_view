import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const itemColumnLabels = ['Game ID', 'Title', 'Platform', 'Genre', 'Developer', 'Publisher', 'Release Date'];

var ItemsPage = function() {
    return (
        <div>
            <DataTable data={itemColumnLabels}/>
            <Link to="/wishes">Wishes</Link><br/>
            <Link to="/ratings">Ratings</Link>
        </div>
    );
}

export default ItemsPage;