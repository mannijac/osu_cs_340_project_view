import React from 'react';
import TableHead from '../components/TableHead'

export default function DataTable(props) {
    return (
        <table>
                <TableHead data={props.data}></TableHead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
        </table>
    );
}
