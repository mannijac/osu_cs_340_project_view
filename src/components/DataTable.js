import React from 'react';
import axios from 'axios';
import TableHead from '../components/TableHead';
import apiURL from '../data/apiURL';

export default function DataTable(props) {
    console.log(props.data);
    let dataTable = props.data;

    async function getData(table_name) {
        let response = await axios.get(apiURL, {params: {
            headers: {'Content-Type': 'application/json'},
            table_name: dataTable.name
        }});
        return response;
    }

    let response = getData(dataTable.name);

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
