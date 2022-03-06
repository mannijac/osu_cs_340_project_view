import React from 'react';
import DataTable from '../components/DataTable';
import InsertForm from '../components/InsertForm';

export default function DataPage(props) {
    return (
        <div>
            <h1>{props.data.label}</h1>
            <DataTable data={props.data}/>
            <footer>
                <InsertForm data={props.data}/>
            </footer>
        </div>
    );
}
