import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import labels from '../data/labels';
import apiURL from '../data/apiURL';
import Input from './Input';

export default function InsertForm(props) {
    const formData = {};
    formData['table_name'] = props.data.name;
    formData.append['inputs'] = props.data.inputs;
    const [values, setValues] = useState({});
    
    const handleInput = ({ target: {name, value}}) => {
        setValues({...values, [name]: value});
    }
    
    async function handleSubmit(e) {
        e.preventDefault();  
        formData['values'] = values;
        console.log(data);
        axios.post(apiURL, {formData})
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));  
    }
    return (
        <form onSubmit={handleSubmit}>
            {formData['inputs'].map((input, i) => <Input data={input} handle={handleInput} />)}
            <button type='submit' value='Submit'>Insert</button>
        </form>
    )
}