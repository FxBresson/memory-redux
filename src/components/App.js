import React, { Component } from 'react';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import '../App.css';
import Footer from './Footer'
import Main from '../containers/Main'
import rootReducer from '../reducers/index'


const loggerMiddleware = createLogger()
// Default screen is home
// Default history is empty
const defaultState = {
  gameLogic: {
    status: 'difficulty-selection',
    history: []
  }
}


const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>
              <img src="logo.png" className='logo' alt="logo"/>
              <span>Memory Cards</span>
          </h1>
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
