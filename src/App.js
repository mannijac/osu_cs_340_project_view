import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import tables from './data/tables';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';
import Nav from './components/Nav';


export default function App() {

    return (
      <div className="App">
        <Nav data={tables}/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          {tables.map((table, i) => <Route exact path={`/${table.name}`} element={<DataPage data={table}/>}/>)}
        </Routes>
      </div>
    );
}
