import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/DataTable';

const userColumnLabels = ["User ID", "Email", "Screen Name", "Country Code"];

function Users() {
    return (
        <div>
            <h1>Users</h1>
            <DataTable data={userColumnLabels} />
        </div>
    );
}

export default Users;