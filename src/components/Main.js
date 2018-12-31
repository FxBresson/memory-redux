import React from 'react'
import PropTypes from 'prop-types'
import Home from '../containers/Home'
import Game from './Game'
import EndScreen from '../containers/EndScreen'

// Display Home, Game or End screens depending on game status
const Main = ({ status }) => (
    <main>
        {status === 'difficulty-selection'
        && <Home />
        }
        {status === 'game'
        && <Game />
        }
        {status === 'end'
        && <EndScreen />
        }
    </main>
)

Main.propTypes = {
    status: PropTypes.string.isRequired
}

export default Main