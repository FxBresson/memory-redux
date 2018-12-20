import React from 'react'
import PropTypes from 'prop-types'
import Home from '../containers/HomeSection'
import Game from './Game'

const Container = ({ status }) => (
    <main>
        {status === 'difficulty-selection'
        && <Home />
        }
        {status === 'game'
        && <Game />
        }
    </main>
)

Container.propTypes = {
}

export default Container