import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CollectionPage from './pages/Collection';
import HomePage from './pages/Home';
import ItemsPage from './pages/Items';
import OwnersPage from './pages/Owners';
import ReviewsPage from './pages/Reviews';
import UsersPage from './pages/Users';
import './App.css';

function App() {
  // const [] = useState();

    return (
      <div className="App">
        <Router>
          <div className="App-header">
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/collection" exact>
            <CollectionPage/>
          </Route>
          <Route path="/items" exact>
            <ItemsPage/>
          </Route>
          <Route path= "/owners" >
            <OwnersPage/>
          </Route>
          <Route path="/reviews" exact>
            <ReviewsPage/>
          </Route>
          <Route path="/users" exact>
            <UsersPage/>
          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;
