import React from 'react';
import Label from '../components/Label.js';

export default function TableHead({data}) {
    return (
        <thead>
            {data.map((label, i) => <Label label={label}/>)}  
        </thead>
    );
}
