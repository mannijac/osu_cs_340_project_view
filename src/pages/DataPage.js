import React from 'react';
import DataTable from '../components/DataTable';

export default function DataPage(props) {
    return (
        <div>
            <h1>{props.data.label}</h1>
            <DataTable data={props.data.columnLabels}/>
        </div>
    );
}
