import { combineReducers } from 'redux'
import cards from './cards'
import gameLogic from './gameLogic'
import timer from './timer'



export default combineReducers({
    cards,
    gameLogic,
    timer
})



