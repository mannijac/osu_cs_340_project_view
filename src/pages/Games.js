import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const itemColumnLabels = ['Game ID', 'Title', 'Platform', 'Genre', 'Developer', 'Publisher', 'Release Date'];

function Games() {
    return (
        <div>
            <h1>Games</h1>
            <DataTable data={itemColumnLabels} />
        </div>
    );
}

export default Games;