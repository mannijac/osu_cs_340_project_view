import React from 'react';
import DataTable from '../components/DataTable';
import TableInsert from '../components/TableInsert';

export default function DataPage(props) {
    return (
        <div>
            <h1>{props.data.label}</h1>
            <DataTable data={props.data}/>
            <footer>
                <TableInsert data={props.data}/>
            </footer>
        </div>
    );
}
