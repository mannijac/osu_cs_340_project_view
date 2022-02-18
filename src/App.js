import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import Games from './pages/Games';
import Collections from './pages/Collections';
import Ratings from './pages/Ratings';
import Wishes from './pages/Wishes';
import Nav from './components/Nav';


function App() {

    return (
      <div className="App">
        <Nav/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/games" element={<Games/>}/>
          <Route exact path="/collections" element={<Collections/>}/>
          <Route exact path="/ratings" element={<Ratings/>}/>
          <Route exact path="/wishes" element={<Wishes/>}/>
        </Routes>
      </div>
    );
}

export default App;