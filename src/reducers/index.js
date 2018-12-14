import { combineReducers } from 'redux'
import card from './card'
import gameLogic from './gameLogic'
import timer from './timer'

export default combineReducers({
    card,
    gameLogic,
    timer
})