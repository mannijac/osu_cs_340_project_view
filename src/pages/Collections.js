import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const collectionColumnLabels = ["User ID", "Game ID"];

function Collections() {
    return (
        <div>
            <h1>Collections</h1>
            <DataTable data={collectionColumnLabels} />
        </div>
    );
}

export default Collections;