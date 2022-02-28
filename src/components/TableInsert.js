import React from 'react';
import labels from '../data/labels';
import apiURL from '../data/apiURL';

export default function TableInsert(props) {
    return (
        <form action={apiURL} method='post'>
            {props.data.inputs.map((input, i) => <input id={input} type='text' placeholder={labels[input]}/>)}
            <button type='submit'>Insert</button>
        </form>
    )
}