import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';
import apiURL from '../data/apiURL';
import { useEffect } from 'react/cjs/react.production.min';
import labels from '../data/labels';

export default function DataTable(props) {
    const dataTable = props.data;
    const [data, setData] = useState([]);
    const [filterKey, setFilterKey] = useState(props.data.columnNames[0]);
    const [filter, setFilter] = useState('');
    const [submit, setSubmit] = useState(false);

    // Build table columns
    const actionColumns = ['Delete'] // Tac on column for delete icon
    let columnLabels = dataTable.columnLabels.map((val) => val); //Clone column labels
    columnLabels = columnLabels.concat(actionColumns);
    // Get table data
    useEffect(() => {
        async function getData(table_name, filter) {
            const response = await axios.get(apiURL, {params: {
                headers: {'Content-Type': 'application/json'},
                table_name: table_name,
            }});
            console.log(response.data);
            setData(response.data);
        }
        if (filter !== '') {
            getData(dataTable.name, filterKey + '=' + filter);    
        } else {
            getData(dataTable.name, '');
        }
        setSubmit(false)
    },[dataTable.name, submit]);

    const handleInput = ({ target: {id, value}}) => {
        if (id === 'filter') {
            setFilter(value)
        } else {
            setFilterKey(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(filterKey, filter)
        setSubmit(true)
        
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <select value={filterKey} onChange={handleInput}>
                {dataTable.columnNames.map((column, i) => <option key={i} value={column}>{labels[column]}</option>)}
            </select>
            <input id='filter' type='text' onChange={handleInput}/>
            <button type='submit' value='Submit'>Filter</button>
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
