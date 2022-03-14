import axios from "axios";
import react from "react";
import {MdDelete} from 'react-icons/md';
import apiURL from "../data/apiURL";


function sendDelete(tableData) {
    axios.delete(apiURL, tableData);
}

export default function DeleteRow(props) {
    function handleClick() {
        const name = props.name;
    const id = props.rowID;   
        sendDelete(name, id);
    }
    return (
        <button onClick={handleClick}>
            <MdDelete className="icon"/>
        </button>
    )
}