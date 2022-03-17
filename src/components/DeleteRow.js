import axios from "axios";
import react from "react";
import {MdDelete} from 'react-icons/md';
import apiURL from "../data/apiURL";


function sendDelete(tableData) {
    axios.delete(apiURL, {data: {id: tableData.id, table_name: tableData.table_name}});
}

export default function DeleteRow(props) {
    function handleClick() {
           
        sendDelete(props);
    }
    return (
        <button onClick={handleClick}>
            <MdDelete className="icon"/>
        </button>
    )
}