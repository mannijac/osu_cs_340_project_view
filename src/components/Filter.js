import React from 'react';
import Options from 'Options.js'

export default function Filter(props) {
    
    return(
        <form>
            <select>
                <Options data={props.data}/>
            </select>
            <input type='text'/>
            <input type='submit'/>
        </form>
    )
}