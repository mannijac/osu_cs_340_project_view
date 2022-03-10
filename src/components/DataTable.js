import React from 'react';
import axios from 'axios';
import TableHead from '../components/TableHead';
import apiURL from '../data/apiURL';

export default async function DataTable(props) {
    let dataTable = props.data

    const results = await axios.get(apiURL, {params: {
        headers: {'Content-Type': 'application/json'}
    }}); // This is not finished

    const actionColumns = ['Collections', 'Wishes', 'Delete']
    let columnLabels = dataTable.columnLabels.map((val) => val); //Clone column labels
    if (dataTable.name === 'users' || dataTable.name === 'games') {
        columnLabels = columnLabels.concat(actionColumns);
    } else {
        columnLabels = columnLabels.concat(['Delete']);
    }


    return (
        <table>
                <TableHead data={columnLabels}></TableHead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
        </table>
    );
}
