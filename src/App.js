import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import Items from './pages/Items';
import Collections from './pages/Collections';
import Ratings from './pages/Ratings';
import Wishes from './pages/Wishes';

const App = function() {

    return (
      <div className="App">
        <Link to="/">Home</Link><br/>
        <Link to="/users">User List</Link><br/>
        <Link to="/items">Item List</Link>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/users" element={<Users/>}/>
            <Route exact path="/items" element={<Items/>}/>
            <Route exact path="/collections" element={<Collections/>}/>
            <Route exact path="/ratings" element={<Ratings/>}/>
            <Route exact path="/wishes" element={<Wishes/>}/>
          </Routes>
        </div>
      </div>
    );
}

export default App;