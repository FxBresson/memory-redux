import React from 'react'
import PropTypes from 'prop-types'
import Home from '../containers/Home'
import Game from './Game'

const Main = ({ status }) => (
    <main>
        {status === 'difficulty-selection'
        && <Home />
        }
        {status === 'game'
        && <Game />
        }
    </main>
)

Main.propTypes = {
}

export default Main