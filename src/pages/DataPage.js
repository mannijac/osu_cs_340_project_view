import React from 'react';
import DataTable from '../components/DataTable';
import InsertForm from '../components/InsertForm';
import UpdateForm from '../components/UpdateForm';

export default function DataPage(props) {
    return (
        <div>
            <h1>{props.data.label}</h1>
            <p>{props.data.description}</p>
            <DataTable data={props.data}/>
            <footer>
                <InsertForm data={props.data} />
                <UpdateForm data={props.data} />
            </footer>
        </div>
    );
}
