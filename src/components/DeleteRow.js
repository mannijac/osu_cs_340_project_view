import axios from "axios";
import react from "react";
import {MdDelete} from 'react-icons/md';
import apiURL from "../data/apiURL";

async function handleClick(props) {
    const name = props.name;
    const id = props.rowID;
    await axios.delete(apiURL, {'table_name': name, 'rowID': id});
}

export default function DeleteRow(props) {
    <button onClick={handleClick(props)}>
        <MdDelete className="icon"/>
    </button>
}