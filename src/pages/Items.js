import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import HomePage from './Home';
import UsersPage from './Users';
import ItemsPage from './Items';
import ReviewsPage from './Reviews';
import OwnersPage from './Owners';

export const ItemsPage = () => {


    const Items = async () => {
        const response = await fetch('/items', {
            method: 'POST',
        });

    };
    return (
        <div>
            <Link
                onClick={HomePage}
            >Home</Link>
            <Link
                onClick={UsersPage}
            >Users</Link>
            <Link
                onClick={ItemsPage}
            >Items</Link>
            <Link
                onClick={ReviewsPage}
            >Reviews</Link>
            <Link
                onClick={OwnersPage}
            >Owners</Link>
        </div>
    );
}

export default ItemsPage;