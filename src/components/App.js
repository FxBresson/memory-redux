import React, { Component } from 'react';
import '../App.css';
import Board from './Board'
import Timer from './Timer'
import Footer from './Footer'

// TEST
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchDeck } from '../actions/index'
import rootReducer from '../reducers/index'
//

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

class App extends Component {
  constructor () {
    super()
    store.dispatch(fetchDeck('reactjs')).then(() => console.log(store.getState()))
  }
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
