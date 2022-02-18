import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const ratingsColumnLabels = ["User ID", "Game ID", "Rating", "Comment"];

function Ratings() {
    return (
        <div>
            <h1>Ratings</h1>
            <DataTable data={ratingsColumnLabels} />
        </div>
    );
}

export default Ratings;