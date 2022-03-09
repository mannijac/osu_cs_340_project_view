import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import labels from '../data/labels';
import apiURL from '../data/apiURL';
import Input from './Input';

export default function InsertForm(props) {
    const formData = {};
    formData['table_name'] = props.data.name;
    formData['inputs'] = JSON.stringify(props.data.inputs);
    const [values, setValues] = useState({});
    
    const handleInput = ({ target: {data, value}}) => {
        setValues({...values, [data]: value});
    }
    
    async function handleSubmit(e) {
        e.preventDefault();  
        for (const key in values) {
            formData[key] = values[key];
        }
        console.log(formData);
        const response = await axios.post(apiURL, formData)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));  
    }
    return (
        <form onSubmit={handleSubmit}>
            {props.data.inputs.map((input, i) => <Input data={input} handle={handleInput} />)}
            <button type='submit' value='Submit'>Insert</button>
        </form>
    )
}