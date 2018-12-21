import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Board = ({ cards, toggleCard }) => (
    <ul className='cardsList'>
        {cards.map(card => (
            <Card key={card.id} {...card} onClick={() => toggleCard(card.id, cards)} />
        ))}
    </ul>
)

Board.propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        toggled: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired,
    toggleCard: PropTypes.func.isRequired
}

export default Board