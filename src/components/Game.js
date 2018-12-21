import React from 'react'
// import PropTypes from 'prop-types'
import CardsOnBoard from '../containers/CardsOnBoard'
import Timer from '../containers/Timer'

const Game = () => (
    <section>
        <Timer/>
        <CardsOnBoard/>
    </section>
)

// Game.propTypes = {
// }

export default Game