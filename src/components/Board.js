import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Board = ({ cards, toggleCard }) => (
    <ul>

    </ul>
)

Board.propTypes = {
    // cards: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     onClick: PropTypes.func.isRequired,
    //     toggled: PropTypes.bool.isRequired,
    //   }).isRequired
    // ).isRequired,
    // toggleCard: PropTypes.func.isRequired
}

export default Board