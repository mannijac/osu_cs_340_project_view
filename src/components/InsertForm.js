import React from 'react';
import { useState } from 'react';
import labels from '../data/labels';
import apiURL from '../data/apiURL';
import Input from './Input';

export default function InsertForm(props) {
    const data = {};
    data.table_name = props.data.name;
    data.keys = props.data.inputs;
    const [values, setValues] = useState({});
    
    const handleInput = ({ target: {name, value}}) => {
        setValues({...values, [name]: value})
    }
    async function handleSubmit(e) {
        e.preventDefault();  
        data.values = values;
        console.log(data);
        const response = await fetch(apiURL, {mode: 'cors', headers: {'Access-Control-Allow-Origin':'*'}, method: 'POST', body: JSON.stringify(data)})
            .then(response => response.json())
            .then(data => console.log(data));  
    } 
    return (
        <form onSubmit={handleSubmit}>
            {data.keys.map((input, i) => <Input data={input} handle={handleInput} />)}
            <button type='submit' value='Submit'>Insert</button>
        </form>
    )
}