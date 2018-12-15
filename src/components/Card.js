import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ onClick, toggled }) => (
    <div
        onClick={onClick}
        className={toggled ? 's-toggled' : 's-normal'}
    ></div>
)

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    toggled: PropTypes.bool.isRequired,
}

export default Card