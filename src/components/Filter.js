import React from 'react';

export default function Filter(props) {
    
    return(
        <form>
            <select>
            {props.data.map((column, i) => <option key={i} value={column}>{column}</option>)}
            </select>
            <input type='text'/>
            <input type='submit'/>
        </form>
    )
}