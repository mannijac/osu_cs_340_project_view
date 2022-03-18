import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';
import apiURL from '../data/apiURL';
import { useEffect } from 'react/cjs/react.production.min';

export default function DataTable(props) {
    const dataTable = props.data;
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({})

    // Build table columns
    const actionColumns = ['Delete'] // Tac on column for delete icon
    let columnLabels = dataTable.columnLabels.map((val) => val); //Clone column labels
    columnLabels = columnLabels.concat(actionColumns);
    // Get table data
    useEffect(() => {
        async function getData(table_name) {
            const response = await axios.get(apiURL, {params: {
                headers: {'Content-Type': 'application/json'},
                table_name: table_name
            }});
            console.log(response.data);
            setData(response.data);
        }
        
        getData(dataTable.name);
    },[dataTable.name]);


    return (
        <div>
        <form>
            <select>
                {columnLabels.map((column, i) => <option key={i} value={column}>{column}</option>)}
            </select>
            <input type='text'/>
            <input type='submit'/>
        </form>
        <table>
                <TableHead data={columnLabels}></TableHead>
            <tbody>
                {data.map((row, i) => <TableRow table_name={dataTable.name} data={row}/>)}
            </tbody>
        </table>
        </div>
        
    );
}
