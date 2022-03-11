import react from "react";
import TableValue from './TableValue';

export default function TableRow(props) {
    return(
        <tr>
            {props.data.map((value, i) => <TableValue data={value}/>)}
        </tr>
    )
}