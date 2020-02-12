import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
