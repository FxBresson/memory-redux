import React, { Component } from 'react';
import '../App.css';
import Board from './Board'
import Timer from './Timer'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
