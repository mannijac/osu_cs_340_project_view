import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const wishColumnLabels = ["User ID", "Game ID"];

function Wishes() {
    return (
        <div>
            <h1>Wishes</h1>
            <DataTable data={wishColumnLabels} />
        </div>
    );
}

export default Wishes;