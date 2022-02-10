import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import HomePage from './Home';
import UsersPage from './Users';
import ItemsPage from './Items';

export const ReviewsPage = () => {


    const Reviews = async () => {
        const response = await fetch('/reviews', {
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
        </div>
    );
}

export default ReviewsPage;