import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-title">Sell It!</div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
