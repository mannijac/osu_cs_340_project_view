import react from "react";
import TableValue from './TableValue';
import DeleteRow from './DeleteRow';

export default function TableRow(props) {
    return(
        <tr>
            {props.data.map((value, i) => <TableValue data={value}/>)}
            <td><DeleteRow data={row_id}/></td>
        </tr>
    )
}