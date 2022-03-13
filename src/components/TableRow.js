import react from "react";
import TableValue from './TableValue';
import DeleteRow from './DeleteRow';

export default function TableRow(props) {
    const tableRow = props.data;
    let row_id = null;

    if (tableRow['user_id'] != null) {
        row_id = tableRow['user_id'];
    } else if (tableRow['game_id'] != null) {
        row_id = tableRow['game_id'];
    }
    
    return(
        <tr>
            {tableRow.map((value, i) => <TableValue data={value}/>)}
            <td><DeleteRow data={row_id}/></td>
        </tr>
    )
}