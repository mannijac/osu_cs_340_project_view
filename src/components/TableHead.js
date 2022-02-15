import React from 'react';
import Label from '../components/Label.js';

function TableHead({data}) {
    return (
        <thead>
            {data.map((label, i) => <Label label={label}/>)}  
        </thead>
    );
}

export default TableHead;