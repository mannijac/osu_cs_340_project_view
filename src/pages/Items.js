import React from 'react';
import { Link } from 'react-router-dom';
import HomeLink from './HomePage';
import UsersLink from './Users';
import ReviewsLink from './Ratings';
import OwnersLink from './Wishes';

const ItemsPage = () => {
    return (
        <div>
            <Link to="/wishes">Wishes</Link><br/>
            <Link to="/ratings">Ratings</Link>
        </div>
    );
}

export default ItemsPage;