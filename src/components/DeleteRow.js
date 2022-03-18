import axios from "axios";
import react from "react";
import {MdDelete} from 'react-icons/md';
import apiURL from "../data/apiURL";


async function sendDelete(tableData) {
    await axios.delete(apiURL, {data: {id: tableData.id, table_name: tableData.table_name}})
    .then(response => {
        console.log(response)
        alert(String(response))
        window.location.reload(false)
    })
    .catch(error => {
        console.log(error)
        alert(String(error))
    });  
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