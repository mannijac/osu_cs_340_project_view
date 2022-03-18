import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import labels from '../data/labels';
import apiURL from '../data/apiURL';
import Input from './Input';
import reactDom from 'react-dom';

export default function UpdateForm(props) {
    //formData['inputs'] = JSON.stringify(props.data.inputs);
    const [formData, setFormData] = useState({});
    formData['table_name'] = props.data.name;

    const handleInput = ({ target: {id, value}}) => {
        setFormData({...formData, [id]: value});
    }
    
    async function handleSubmit(e) {
        e.preventDefault();  
        console.log(formData);
        await axios.put(apiURL, formData, { 
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                console.log(response)
                window.location.reload(false)                
            })
            .catch(error => {
                console.log(error)
                alert(error)
            });  
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Update</h2>
            {props.data.columnNames.map((input, i) => <Input data={input} handle={handleInput} key={i} />)}
            <button type='submit' value='Submit'>Update</button>
        </form>
    )
}