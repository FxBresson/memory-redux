import React from 'react'
import PropTypes from 'prop-types'
import Board from '../containers/Board'
import Timer from '../containers/Timer'

const Game = () => (
    <section>
        <Timer/>
        <Board/>
    </section>
)

Game.propTypes = {
}

export default Game