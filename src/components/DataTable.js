import React from 'react';
import TableHead from '../components/TableHead'

export default function DataTable(props) {
    let column = props.data
    const actionColumns = ['Collections', 'Wishes', 'Delete']
    let columnLabels = column.columnLabels.map((val) => val); //Clone column labels
    if (column.name === 'users' || column.name === 'games') {
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
