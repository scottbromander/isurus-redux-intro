import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import BookInputPage from '../pages/BookInputPage/BookInputPage';
import BookShelfPage from '../pages/BookshelfPage/BookshelfPage';
import HomePage from '../pages/HomePage/HomePage';
import UserPage from '../pages/UserPage/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="hero">
            <h1>Bookstore</h1>
          </div>
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/bookinput">Book Input</Link>
            </li>
            
            <li>
              <Link to="/bookshelf">Bookshelf</Link>
            </li>

            <li>
              <Link to="/user">User Page</Link>
            </li>
          </ul>

          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route path="/bookinput" component={BookInputPage} />
            <Route path="/bookshelf" component={BookShelfPage} />
            <Route path="/user" component={UserPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
