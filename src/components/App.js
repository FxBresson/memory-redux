import React, { Component } from 'react';
import '../App.css';
import Board from './Board'
import {Timer} from './Timer'
import Footer from './Footer'
import { createStore } from 'redux'
import timer from '../reducers/timer';

const store = createStore(timer);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Timer
              time={store.getState().time}
              running={store.getState().running}
              interval={store.getState().interval}
          />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
