import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Campaign from './Containers/Campaign/Campaign';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">All Campaign</header>
        <Campaign></Campaign>
      </div>
    );
  }
}

export default App;
