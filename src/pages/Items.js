import React from 'react';
import { Link } from 'react-router-dom';

const ItemsPage = () => {
    return (
        <div>
            <Link to="/wishes">Wishes</Link><br/>
            <Link to="/ratings">Ratings</Link>
        </div>
    );
}

export default ItemsPage;