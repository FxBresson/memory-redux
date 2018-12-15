import React, { Component } from 'react';
import '../App.css';
import Board from './Board'
import Timer from './Timer'
import Footer from './Footer'

import { Provider } from 'react-redux'

import CardsOnBoard from '../containers/CardsOnBoard'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchDeck } from '../actions/index'
import rootReducer from '../reducers/index'


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
    store.dispatch(fetchDeck()).then(() => console.log("Deck and cards received"))
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Timer />
          <CardsOnBoard />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
