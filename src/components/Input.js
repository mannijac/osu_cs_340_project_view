import React from 'react';
import labels from '../data/labels';

export default function Input(props) {
    const input = props.data;
    return(
        <p><input id={input} type='text' name={labels[input]} onChange={props.handle} placeholder={labels[input]}/></p>
    )
}
