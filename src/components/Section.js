import React from 'react'
import PropTypes from 'prop-types'
import CardsOnBoard from '../containers/CardsOnBoard'
import Timer from '../containers/Timer'
import Home from './Home'

const Section = ({ nbCards }) => (
    <div>
        <Timer style={nbCards ? "display: block;" : "display: none;"} />
        <CardsOnBoard tyle={nbCards ? "display: block;" : "display: none;"} />
        <Home tyle={!nbCards ? "display: block;" : "display: none;"} />
    </div>
)

Section.propTypes = {
    nbCards: PropTypes.number.isRequired
}

export default Section