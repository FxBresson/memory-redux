import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ id, value, onClick, toggled }) => (
    <div
        onClick={onClick}
        className={toggled ? 'card s-toggled' : 'card s-normal'}
    >
        <img src={`https://deckofcardsapi.com/static/img/${value}.png`} alt="" />
        <div className="cardback"></div>
    </div>
)

Card.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    toggled: PropTypes.bool.isRequired
}

export default Card