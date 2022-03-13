import react from "react";
import TableValue from './TableValue';
import DeleteRow from './DeleteRow';

export default function TableRow(props) {
    const tableRow = props.data;
    let row_id = tableRow[0];

    return(
        <tr>
            {tableRow.map((value, i) => <TableValue data={value}/>)}
            <td><DeleteRow data={row_id}/></td>
        </tr>
    )
}