import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import labels from '../data/labels';
import apiURL from '../data/apiURL';
import Input from './Input';
import reactDom from 'react-dom';

export default function InsertForm(props) {
    //formData['inputs'] = JSON.stringify(props.data.inputs);
    const [formData, setFormData] = useState({});
    formData['table_name'] = props.data.name;

    const handleInput = ({ target: {id, value}}) => {
        setFormData({...formData, [id]: value});
    }
    
    async function handleSubmit(e) {
        e.preventDefault();  
        console.log(formData);
        await axios.post(apiURL, formData, { 
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                console.log(response)
                alert(String(response))
            })
            .catch(error => {
                console.log(error)
                alert(String(error))
            });  
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Insert</h2>
            {props.data.inputs.map((input, i) => <Input data={input} handle={handleInput} key={i} />)}
            <button type='submit' value='Submit'>Insert</button>
        </form>
    )
}