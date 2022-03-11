import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';
import apiURL from '../data/apiURL';


export default function DataTable(props) {
    const dataTable = props.data;
    const [data, setData] = useState([]);

    async function getData(table_name) {
        const response = await axios.get(apiURL, {params: {
            headers: {'Content-Type': 'application/json'},
            table_name: table_name
        }});
        console.log(response.data);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
        setData(response.data);
    }

    if (data === []) {
        getData(dataTable.name);
    }
    
    
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
                {data.map((row, i) => <TableRow data={row}/>)}
            </tbody>
        </table>
    );
}
