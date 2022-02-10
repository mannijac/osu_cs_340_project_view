import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import HomePage from './Home';
import UsersPage from './Users';
import ItemsPage from './Items';

export const UsersPage = () => {

    const Users = async () => {
        const response = await fetch('/users', {
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

export default UsersPage;