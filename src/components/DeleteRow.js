import axios from "axios";
import react from "react";
import {MdDelete} from 'react-icons/md';
import apiURL from "../data/apiURL";


function async sendDelete(tableData) {
    res = await axios.delete(apiURL, {data: {id: tableData.id, table_name: tableData.table_name}});
    alert(res['success'])
    if (res['error'] === null) {
        window.location.reload(false)
    }
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