import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ onClick, id, toggled }) => (
    <div
        onClick={onClick}
        className={toggled ? 's-toggled' : 's-normal'}
    >
        <img src={`https://deckofcardsapi.com/static/img/${id}.png`} alt="" />
    </div>
)

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    toggled: PropTypes.bool.isRequired,
}

export default Card