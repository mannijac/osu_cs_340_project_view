import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import HomePage from './Home';
import UsersPage from './Users';
import ItemsPage from './Items';
import CollectionPage from './Collection';

export const OwnersPage = () => {


    const Owners = async () => {
        const response = await fetch('/owners', {
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
                onClick={CollectionPage}
            >Collection</Link>
        </div>
    );
}

export default OwnersPage;