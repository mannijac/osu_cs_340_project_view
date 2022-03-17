import react from "react";

export default function Options(props) {

    return(
        <div>
        {props.data.map((column, i) => <option key={i} value={column}>{column}</option>)}
        </div>
    )
}